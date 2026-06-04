package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.CronologiaTesseraDTO;
import vvf.ufficioIV.applicativobadge.dto.StatisticheTessereDTO;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.sql.*;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class RicercaTessereDAOJDBCImpl implements RicercaTessereDAO {

    private Connection conn;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    public RicercaTessereDAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (RicercaTessereDAO): " + e.getMessage());
        }
    }

    
    // Metodo helper per costruire la clausola WHERE in base ai filtri
    private String buildWhereClause(JsonArray filters, List<Object> params) {
        StringBuilder where = new StringBuilder(" WHERE 1=1 ");
        if (filters != null) {
            for (JsonElement el : filters) {
                JsonObject filter = el.getAsJsonObject();
                
                // Evitiamo NullPointerException se mancano chiavi per filtri custom
                String field = filter.has("field") ? filter.get("field").getAsString() : "";
                String operator = filter.has("operator") ? filter.get("operator").getAsString() : "";
                String value = filter.has("value") ? filter.get("value").getAsString() : "";

                // --- INIZIO GESTIONE FILTRI SPECIALI ---
                if ("soloNonAssegnate".equals(field)) {
                    if ("true".equalsIgnoreCase(value)) {
                        where.append(" AND tp.CODFISDIP IS NULL ");
                    }
                    continue; // Gestito, passa al prossimo filtro
                }
                // --- FINE GESTIONE FILTRI SPECIALI ---

                // Mappatura campi JSON sulle colonne DB reali per i filtri standard
                String dbColumn = "";
                switch (field) {
                    case "idTessera": dbColumn = "t.IDTESSERA"; break;
                    case "codiceFiscale": dbColumn = "tp.CODFISDIP"; break;
                    case "nome": dbColumn = "a.NOME"; break;
                    case "cognome": dbColumn = "a.COGNOME"; break;
                    case "codiceInterno": dbColumn = "td.CODICEINTERNO"; break;
                    
                    // ---> AGGIUNGI QUESTA RIGA PER SOSTITUZIONE CODICE SEDE CON DESCRIZIONE SEDE<---
                    case "sede": dbColumn = "d.DESCRIZIONE"; break;
                    
                    default: continue; // ignora filtri non riconosciuti o gestiti male
                }

                if ("contains".equalsIgnoreCase(operator)) {
                    where.append(" AND UPPER(").append(dbColumn).append(") LIKE ? ");
                    params.add("%" + value.toUpperCase() + "%");
                } else if ("equals".equalsIgnoreCase(operator)) {
                    where.append(" AND UPPER(").append(dbColumn).append(") = ? ");
                    params.add(value.toUpperCase());
                }
            }
        }
        return where.toString();
    }

    // 1. Aggiorno la FROM clause aggiungendo la JOIN con DIPARTIMENTO1
    private String getFromClause() {
        return "FROM TESSERA1 t " +
               "LEFT JOIN TESSERADECODE1 td ON t.IDTESSERA = td.IDTESSERA " +
               "LEFT JOIN (" +
               "    SELECT IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE, " +
               "           ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
               "    FROM TESSERADIPEND1" +
               ") tp ON t.IDTESSERA = tp.IDTESSERA AND tp.rn = 1 " +
               "LEFT JOIN ANAGRAFICA_CODFISCALE1 a ON tp.CODFISDIP = a.CODFISCALE " +
               "LEFT JOIN DIPARTIMENTO1 d ON t.SEDE = d.CODSEDE "; // <-- NUOVA JOIN
    }

    // 2. Aggiorno la getBaseQuery per estrarre la DESCRIZIONE aliasandola come SEDE
    private String getBaseQuery() {
        return "SELECT t.IDTESSERA, t.CODTIPOTESSERA, d.DESCRIZIONE AS SEDE, t.DATAORAINDISPONIBILITA, " + // <-- MODIFICA QUI
               "td.CODICEINTERNO, tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
               "a.NOME, a.COGNOME " +
               getFromClause();
    }

    @Override
    public List<TesseraFiltroDTO> getTessereByFilters(JsonArray filters, int page, int pageSize) {
        List<TesseraFiltroDTO> result = new ArrayList<>();
        List<Object> params = new ArrayList<>();
        
        String whereClause = buildWhereClause(filters, params);
	    // Ordiniamo per data di inizio assegnazione decrescente (la più recente prima).
	    // NULLS LAST assicura che le tessere mai assegnate appaiano in fondo e non rompano l'ordine.
	    String baseQuery = getBaseQuery() + whereClause + " ORDER BY tp.DATAORAINIZIOASSEGNAZIONE DESC NULLS LAST, t.IDTESSERA DESC";

        // Paginazione compatibile con Oracle 10g e 12c (uso di ROWNUM)
        int minRow = (page - 1) * pageSize + 1;
        int maxRow = page * pageSize;

        String paginatedQuery = 
            "SELECT * FROM (" +
            "  SELECT a.*, ROWNUM rnum FROM (" + baseQuery + ") a " +
            "  WHERE ROWNUM <= ?" +
            ") WHERE rnum >= ?";

        try (PreparedStatement ps = conn.prepareStatement(paginatedQuery)) {
            int i = 1;
            // Setta i parametri dei filtri
            for (Object p : params) {
                ps.setString(i++, p.toString());
            }
            // Setta i parametri della paginazione
            ps.setInt(i++, maxRow);
            ps.setInt(i, minRow);

            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    TesseraFiltroDTO dto = new TesseraFiltroDTO();
                    dto.setIdTessera(rs.getString("IDTESSERA"));
                    dto.setCodTipoTessera(rs.getString("CODTIPOTESSERA"));
                    dto.setSede(rs.getString("SEDE"));
                    dto.setCodiceInterno(rs.getString("CODICEINTERNO"));
                    dto.setCodiceFiscale(rs.getString("CODFISDIP"));
                    dto.setNome(rs.getString("NOME"));
                    dto.setCognome(rs.getString("COGNOME"));

                    // Formattazione Date
                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    if (tsIndisp != null) dto.setDataOraIndisponibilita(tsIndisp.toLocalDateTime().format(formatter));

                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    if (tsInizio != null) dto.setDataOraInizioAssegnazione(tsInizio.toLocalDateTime().format(formatter));

                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");
                    if (tsFine != null) dto.setDataOraFineAssegnazione(tsFine.toLocalDateTime().format(formatter));

                    result.add(dto);
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getTessereByFilters: " + e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public int countTessereByFilters(JsonArray filters) {
        List<Object> params = new ArrayList<>();
        String whereClause = buildWhereClause(filters, params);
        
        // Count veloce usando la stessa logica di join centralizzata
        String countQuery = "SELECT COUNT(*) " + getFromClause() + whereClause;

        try (PreparedStatement ps = conn.prepareStatement(countQuery)) {
            int i = 1;
            for (Object p : params) {
                ps.setString(i++, p.toString());
            }
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt(1);
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore countTessereByFilters: " + e.getMessage());
        }
        return 0;
    }
    
    
    @Override
    public TesseraFiltroDTO getTesseraById(String idTessera) {
        // ROWNUM=1 assicura di prendere l'ultima assegnazione in caso di storico multiplo
        String sql = "SELECT * FROM (" +
                     "  SELECT t.IDTESSERA, t.CODTIPOTESSERA, t.SEDE, t.DATAORAINDISPONIBILITA, " +
                     "         td.CODICEINTERNO, tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
                     "         a.NOME, a.COGNOME " +
                     "  FROM TESSERA1 t " +
                     "  LEFT JOIN TESSERADECODE1 td ON t.IDTESSERA = td.IDTESSERA " +
                     "  LEFT JOIN TESSERADIPEND1 tp ON t.IDTESSERA = tp.IDTESSERA " +
                     "  LEFT JOIN ANAGRAFICA_CODFISCALE1 a ON tp.CODFISDIP = a.CODFISCALE " +
                     "  WHERE t.IDTESSERA = ? " +
                     "  ORDER BY tp.DATAORAINIZIOASSEGNAZIONE DESC " +
                     ") WHERE ROWNUM = 1";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    TesseraFiltroDTO dto = new TesseraFiltroDTO();
                    dto.setIdTessera(rs.getString("IDTESSERA"));
                    dto.setCodTipoTessera(rs.getString("CODTIPOTESSERA"));
                    dto.setSede(rs.getString("SEDE"));
                    dto.setCodiceInterno(rs.getString("CODICEINTERNO"));
                    dto.setCodiceFiscale(rs.getString("CODFISDIP"));
                    dto.setNome(rs.getString("NOME"));
                    dto.setCognome(rs.getString("COGNOME"));

                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    if (tsIndisp != null) dto.setDataOraIndisponibilita(tsIndisp.toLocalDateTime().format(formatter));

                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    if (tsInizio != null) dto.setDataOraInizioAssegnazione(tsInizio.toLocalDateTime().format(formatter));

                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");
                    if (tsFine != null) dto.setDataOraFineAssegnazione(tsFine.toLocalDateTime().format(formatter));

                    return dto;
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getTesseraById: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
    
    
    @Override
    public List<CronologiaTesseraDTO> getCronologiaByTessera(String idTessera) {
        List<CronologiaTesseraDTO> result = new ArrayList<>();
        
        // Ordiniamo per data di inizio decrescente (la più recente in cima)
        String sql = "SELECT tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
                     "       a.NOME, a.COGNOME " +
                     "FROM TESSERADIPEND1 tp " +
                     "LEFT JOIN ANAGRAFICA_CODFISCALE1 a ON tp.CODFISDIP = a.CODFISCALE " +
                     "WHERE tp.IDTESSERA = ? " +
                     "ORDER BY tp.DATAORAINIZIOASSEGNAZIONE DESC";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    CronologiaTesseraDTO dto = new CronologiaTesseraDTO();
                    dto.setCodFiscale(rs.getString("CODFISDIP"));
                    dto.setNome(rs.getString("NOME"));
                    dto.setCognome(rs.getString("COGNOME"));

                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    if (tsInizio != null) dto.setDataOraInizioAssegnazione(tsInizio.toLocalDateTime().format(formatter));

                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");
                    if (tsFine != null) dto.setDataOraFineAssegnazione(tsFine.toLocalDateTime().format(formatter));

                    result.add(dto);
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getCronologiaByTessera: " + e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    
    @Override
    public StatisticheTessereDTO getStatisticheGenerali() {
        StatisticheTessereDTO stats = new StatisticheTessereDTO();
        StatisticheTessereDTO.Generale generale = new StatisticheTessereDTO.Generale();

        /*
         * SPIEGAZIONE DELLA QUERY:
         * 1. JOIN con una subquery che estrae SOLO l'ultima assegnazione per ogni tessera (rn = 1)
         * 2. totali: Conto tutte le righe di TESSERA1
         * 3. inutilizzabili: Sommo 1 se la data indisponibilità è passata (<= CURRENT_TIMESTAMP)
         * 4. assegnati: La tessera è valida (> CURRENT_TIMESTAMP) E c'è un'assegnazione in corso (data fine > oggi)
         * 5. nonAssegnati: La tessera è valida (> CURRENT_TIMESTAMP) MA l'assegnazione non c'è o è scaduta
         */
        String sql = "SELECT " +
                     "  COUNT(t.IDTESSERA) AS totali, " +
                     "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA <= CURRENT_TIMESTAMP THEN 1 ELSE 0 END) AS inutilizzabili, " +
                     "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
                     "            AND tp.CODFISDIP IS NOT NULL " +
                     "            AND tp.DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP THEN 1 ELSE 0 END) AS assegnati, " +
                     "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
                     "            AND (tp.CODFISDIP IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP) THEN 1 ELSE 0 END) AS nonAssegnati " +
                     "FROM TESSERA1 t " +
                     "LEFT JOIN ( " +
                     "    SELECT IDTESSERA, CODFISDIP, DATAORAFINEASSEGNAZIONE, " +
                     "           ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
                     "    FROM TESSERADIPEND1 " +
                     ") tp ON t.IDTESSERA = tp.IDTESSERA AND tp.rn = 1";

        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            if (rs.next()) {
                generale.setTotali(rs.getInt("totali"));
                generale.setInutilizzabili(rs.getInt("inutilizzabili"));
                generale.setAssegnati(rs.getInt("assegnati"));
                generale.setNonAssegnati(rs.getInt("nonAssegnati"));
            }
        } catch (SQLException e) {
            System.err.println("Errore getStatisticheGenerali: " + e.getMessage());
            e.printStackTrace();
        }

        stats.setGenerale(generale);
        return stats;
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (RicercaTessereDAO): " + e.getMessage());
        }
    }
}