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
                
                // Estraiamo field e operator in modo sicuro
                String field = filter.has("field") ? filter.get("field").getAsString() : "";
                String operator = filter.has("operator") ? filter.get("operator").getAsString() : "";
                
                // Estraiamo il value come JsonElement generico (potrebbe essere stringa o array)
                JsonElement valueElement = filter.has("value") ? filter.get("value") : null;

                // --- INIZIO GESTIONE FILTRI SPECIALI ---
                
                // 1. Filtro speciale: "soloNonAssegnate"
                if ("soloNonAssegnate".equals(field)) {
                    // Controlliamo che sia una primitiva prima di estrarre come stringa
                    if (valueElement != null && valueElement.isJsonPrimitive() && "true".equalsIgnoreCase(valueElement.getAsString())) {
                        where.append(" AND tp.CODFISDIP IS NULL ");
                    }
                    continue; // Gestito, passa al prossimo filtro
                }

                // 2. NUOVO FILTRO SPECIALE: "stato"
                if ("stato".equals(field)) {
                    List<String> statiRichiesti = new ArrayList<>();
                    
                    // Supporto operatore "in" (es. se da Frontend inviano ['libera', 'occupata'])
                    if ("in".equalsIgnoreCase(operator) && valueElement.isJsonArray()) {
                        JsonArray valueArray = valueElement.getAsJsonArray();
                        for (int i = 0; i < valueArray.size(); i++) {
                            statiRichiesti.add(valueArray.get(i).getAsString().trim().toLowerCase());
                        }
                    } 
                    // Supporto operatore "equals" (es. se da Frontend inviano 'libera')
                    else if ("equals".equalsIgnoreCase(operator) && valueElement.isJsonPrimitive()) {
                        statiRichiesti.add(valueElement.getAsString().trim().toLowerCase());
                    }
                    
                    // Se abbiamo trovato stati validi da filtrare, costruiamo la logica SQL
                    if (!statiRichiesti.isEmpty()) {
                        List<String> sqlConditions = new ArrayList<>();
                        for (String stato : statiRichiesti) {
                            switch (stato) {
	                            case "indisponibile":
	                                sqlConditions.add("(t.DATAORAINDISPONIBILITA <= SYSTIMESTAMP)");
	                                break;
	                            case "occupata":
	                                // Aggiunto SYSTIMESTAMP al posto di CURRENT_TIMESTAMP e TRIM sul codice fiscale
	                                sqlConditions.add("(t.DATAORAINDISPONIBILITA > SYSTIMESTAMP AND tp.DATAORAFINEASSEGNAZIONE > SYSTIMESTAMP AND TRIM(tp.CODFISDIP) IS NOT NULL)");
	                                break;
	                            case "libera":
	                                // Aggiunto SYSTIMESTAMP al posto di CURRENT_TIMESTAMP e TRIM sul codice fiscale
	                                sqlConditions.add("(t.DATAORAINDISPONIBILITA > SYSTIMESTAMP AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= SYSTIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL))");
	                                break;
	                            case "nd":
	                                sqlConditions.add("(t.DATAORAINDISPONIBILITA IS NULL)");
	                                break;
                            }
                        }
                        
                        // Uniamo tutte le condizioni di stato con un OR, racchiudendole tra parentesi 
                        // per non interferire con il resto degli AND globali
                        if (!sqlConditions.isEmpty()) {
                            where.append(" AND (").append(String.join(" OR ", sqlConditions)).append(") ");
                        }
                    }
                    continue; // Gestito, passa al prossimo filtro
                }
                // --- FINE GESTIONE FILTRI SPECIALI ---

                // Se manca il valore, ignoriamo il filtro
                if (valueElement == null || valueElement.isJsonNull()) {
                    continue;
                }

                // Mappatura campi JSON sulle colonne DB reali per i filtri standard
                String dbColumn = "";
                switch (field) {
                    case "idTessera": dbColumn = "t.IDTESSERA"; break;
                    case "codiceFiscale": dbColumn = "tp.CODFISDIP"; break;
                    case "nome": dbColumn = "a.NOME"; break;
                    case "cognome": dbColumn = "a.COGNOME"; break;
                    case "codiceInterno": dbColumn = "td.CODICEINTERNO"; break;
                    case "codTipoTessera": dbColumn = "t.CODTIPOTESSERA"; break;
                    case "sede": dbColumn = "t.SEDE"; break; // <-- FILTRO APPLICATO SUL CODICE UNIVOCO
                    default: 
                        System.out.println("[DEBUG] filtri ignorati o non riconosciuti");
                        continue; // ignora filtri non riconosciuti o gestiti male
                }

                // --- GESTIONE NUOVO OPERATORE "in" (Valore Array) ---
                if ("in".equalsIgnoreCase(operator) && valueElement.isJsonArray()) {
                    JsonArray valueArray = valueElement.getAsJsonArray();
                    if (valueArray.size() > 0) {
                        // AGGIUNTO TRIM LATO SQL
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) IN (");
                        for (int i = 0; i < valueArray.size(); i++) {
                            where.append("?"); // Aggiunge i placeholder
                            if (i < valueArray.size() - 1) {
                                where.append(", ");
                            }
                            // AGGIUNTO .trim() LATO JAVA
                            params.add(valueArray.get(i).getAsString().trim().toUpperCase());
                        }
                        where.append(") ");
                    }
                } 
                // --- GESTIONE OPERATORI CLASSICI (Valore Stringa/Primitiva) ---
                else if (valueElement.isJsonPrimitive()) {
                    // AGGIUNTO .trim() LATO JAVA
                    String stringValue = valueElement.getAsString().trim();
                    
                    if ("contains".equalsIgnoreCase(operator)) {
                        // AGGIUNTO TRIM LATO SQL
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) LIKE ? ");
                        
                        // Gestione ottimizzata "inizia per" su NOME e COGNOME
                        if ("nome".equals(field) || "cognome".equals(field)) {
                            params.add(stringValue.toUpperCase() + "%"); 
                        } else {
                            params.add("%" + stringValue.toUpperCase() + "%");
                        }
                    } else if ("equals".equalsIgnoreCase(operator)) {
                        // AGGIUNTO TRIM LATO SQL
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) = ? ");
                        params.add(stringValue.toUpperCase());
                    }
                }
            }
        }
        return where.toString();
    }
    
    
    /**
     * Traduzione della logica Frontend in Java.
     * Calcola lo stato della tessera basandosi sui Timestamp del Database.
     */
    private String calcolaStatoTessera(Timestamp tsIndisp, Timestamp tsFine, String codiceFiscale) {
        // Otteniamo il timestamp attuale in millisecondi (equivalente al Date.now() di JS)
        long now = System.currentTimeMillis();

        // 1. Logica isIndisponibile()
        // Se la data di indisponibilità è passata (<= now)
        if (tsIndisp != null && tsIndisp.getTime() <= now) {
            return "indisponibile";
        }

        // 2. Logica isOccupata()
        // Se la data di fine assegnazione è nel futuro (> now) E c'è un codice fiscale
        if (tsFine != null && tsFine.getTime() > now && codiceFiscale != null && !codiceFiscale.trim().isEmpty()) {
            return "occupata";
        }

        // 3. Logica isLibera()
        // Se arriviamo qui, significa che le condizioni precedenti (Occupata/Indisponibile) sono FALSE.
        // Verifichiamo solo che la tessera sia integra (data di indisponibilità nel futuro, es: anno 9999)
        if (tsIndisp != null && tsIndisp.getTime() > now) {
            return "libera";
        }

        // 4. Paracadute "nd"
        // Questo stato si raggiunge solo se i dati sul DB sono gravemente corrotti 
        // (es. tsIndisp è NULL, cosa che teoricamente non dovrebbe mai accadere con i vostri default).
        return "nd";
    }

    // 1. Manteniamo la FROM clause con la JOIN a DIPARTIMENTO1 per recuperare la descrizione
    private String getFromClause() {
        return "FROM TESSERA1 t " +
               "LEFT JOIN TESSERADECODE1 td ON t.IDTESSERA = td.IDTESSERA " +
               "LEFT JOIN (" +
               "    SELECT IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE, " +
               "           ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
               "    FROM TESSERADIPEND1" +
               ") tp ON t.IDTESSERA = tp.IDTESSERA AND tp.rn = 1 " +
               "LEFT JOIN ANAGRAFICA_CODFISCALE1 a ON tp.CODFISDIP = a.CODFISCALE " +
               "LEFT JOIN DIPARTIMENTO1 d ON t.SEDE = d.CODSEDE ";
    }

    // 2. Manteniamo l'estrazione di d.DESCRIZIONE aliasandola come SEDE per il DTO
    private String getBaseQuery() {
        return "SELECT t.IDTESSERA, t.CODTIPOTESSERA, d.DESCRIZIONE AS SEDE, t.DATAORAINDISPONIBILITA, " +
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

                    
                    // ESTAZIONE TIMESTAMP NATIVI
                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");

                    // CALCOLO STATO
                    String statoCalcolato = calcolaStatoTessera(tsIndisp, tsFine, dto.getCodiceFiscale());
                    dto.setStato(statoCalcolato);
                    
                    // Formattazione Date
                    if (tsIndisp != null) dto.setDataOraIndisponibilita(tsIndisp.toLocalDateTime().format(formatter));
                    if (tsInizio != null) dto.setDataOraInizioAssegnazione(tsInizio.toLocalDateTime().format(formatter));
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
                    
                    // ESTRAZIONE TIMESTAMP
                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");

                    // CALCOLO STATO 
                    String statoCalcolato = calcolaStatoTessera(tsIndisp, tsFine, dto.getCodiceFiscale());
                    dto.setStato(statoCalcolato);

                    if (tsIndisp != null) dto.setDataOraIndisponibilita(tsIndisp.toLocalDateTime().format(formatter));
                    if (tsInizio != null) dto.setDataOraInizioAssegnazione(tsInizio.toLocalDateTime().format(formatter));
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
         * SPIEGAZIONE DELLA QUERY AGGIORNATA:
         * Calcola le statistiche riflettendo i 4 nuovi stati del sistema.
         * Le condizioni nei CASE WHEN sono la traduzione esatta del metodo Java 'calcolaStatoTessera'
         */
        String sql = "SELECT " +
                "  COUNT(t.IDTESSERA) AS totali, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA <= SYSTIMESTAMP THEN 1 ELSE 0 END) AS indisponibili, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA > SYSTIMESTAMP " +
                "            AND tp.DATAORAFINEASSEGNAZIONE > SYSTIMESTAMP " +
                "            AND TRIM(tp.CODFISDIP) IS NOT NULL THEN 1 ELSE 0 END) AS occupate, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA > SYSTIMESTAMP " +
                "            AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= SYSTIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL) THEN 1 ELSE 0 END) AS libere, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA IS NULL THEN 1 ELSE 0 END) AS nd " +
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
                generale.setIndisponibili(rs.getInt("indisponibili"));
                generale.setOccupate(rs.getInt("occupate"));
                generale.setLibere(rs.getInt("libere"));
                generale.setNd(rs.getInt("nd"));
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