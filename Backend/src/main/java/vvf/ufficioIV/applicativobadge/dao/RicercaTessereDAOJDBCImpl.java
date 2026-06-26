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

    private String buildWhereClause(JsonArray filters, List<Object> params) {
        StringBuilder where = new StringBuilder(" WHERE 1=1 ");
        if (filters != null) {
            for (JsonElement el : filters) {
                JsonObject filter = el.getAsJsonObject();
                
                String field = filter.has("field") ? filter.get("field").getAsString() : "";
                String operator = filter.has("operator") ? filter.get("operator").getAsString() : "";
                JsonElement valueElement = filter.has("value") ? filter.get("value") : null;

                if ("soloNonAssegnate".equals(field)) {
                    if (valueElement != null && valueElement.isJsonPrimitive() && "true".equalsIgnoreCase(valueElement.getAsString())) {
                        where.append(" AND tp.CODFISDIP IS NULL ");
                    }
                    continue;
                }

                if ("stato".equals(field)) {
                    List<String> statiRichiesti = new ArrayList<>();
                    
                    if ("in".equalsIgnoreCase(operator) && valueElement.isJsonArray()) {
                        JsonArray valueArray = valueElement.getAsJsonArray();
                        for (int i = 0; i < valueArray.size(); i++) {
                            statiRichiesti.add(valueArray.get(i).getAsString().trim().toLowerCase());
                        }
                    } else if ("equals".equalsIgnoreCase(operator) && valueElement.isJsonPrimitive()) {
                        statiRichiesti.add(valueElement.getAsString().trim().toLowerCase());
                    }
                    
                    if (!statiRichiesti.isEmpty()) {
                        List<String> sqlConditions = new ArrayList<>();
                        for (String stato : statiRichiesti) {
                            switch (stato) {
                                case "indisponibile":
                                    sqlConditions.add("(t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA <= CURRENT_TIMESTAMP)");
                                    break;
                                case "occupata":
                                    sqlConditions.add("((t.DATAORAINDISPONIBILITA IS NULL OR t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP) " +
                                                      "AND tp.DATAORAFINEASSEGNAZIONE IS NOT NULL AND tp.DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP " +
                                                      "AND TRIM(tp.CODFISDIP) IS NOT NULL)");
                                    break;
                                case "libera":
                                    sqlConditions.add("(t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
                                                      "AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL))");
                                    break;
                                case "nd":
                                    sqlConditions.add("(t.DATAORAINDISPONIBILITA IS NULL " +
                                                      "AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL))");
                                    break;
                            }
                        }
                        if (!sqlConditions.isEmpty()) {
                            where.append(" AND (").append(String.join(" OR ", sqlConditions)).append(") ");
                        }
                    }
                    continue;
                }

                if (valueElement == null || valueElement.isJsonNull()) continue;

                String dbColumn = "";
                switch (field) {
                    case "idTessera": dbColumn = "t.IDTESSERA"; break;
                    case "codiceFiscale": dbColumn = "tp.CODFISDIP"; break;
                    case "nome": dbColumn = "a.NOME"; break;
                    case "cognome": dbColumn = "a.COGNOME"; break;
                    case "codiceInterno": dbColumn = "td.CODICEINTERNO"; break;
                    case "codTipoTessera": dbColumn = "t.CODTIPOTESSERA"; break;
                    case "sede": dbColumn = "t.SEDE"; break;
                    default: continue;
                }

                if ("in".equalsIgnoreCase(operator) && valueElement.isJsonArray()) {
                    JsonArray valueArray = valueElement.getAsJsonArray();
                    if (valueArray.size() > 0) {
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) IN (");
                        for (int i = 0; i < valueArray.size(); i++) {
                            where.append("?");
                            if (i < valueArray.size() - 1) where.append(", ");
                            params.add(valueArray.get(i).getAsString().trim().toUpperCase());
                        }
                        where.append(") ");
                    }
                } else if (valueElement.isJsonPrimitive()) {
                    String stringValue = valueElement.getAsString().trim();
                    if ("contains".equalsIgnoreCase(operator)) {
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) LIKE ? ");
                        if ("nome".equals(field) || "cognome".equals(field)) {
                            params.add(stringValue.toUpperCase() + "%"); 
                        } else {
                            params.add("%" + stringValue.toUpperCase() + "%");
                        }
                    } else if ("equals".equalsIgnoreCase(operator)) {
                        where.append(" AND TRIM(UPPER(").append(dbColumn).append(")) = ? ");
                        params.add(stringValue.toUpperCase());
                    }
                }
            }
        }
        return where.toString();
    }

    private String getFromClause() {
        return "FROM tessera t " +
               "LEFT JOIN tesseradecode td ON t.IDTESSERA = td.IDTESSERA " +
               "LEFT JOIN (" +
               "    SELECT IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE, " +
               "           ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
               "    FROM tesseradipend" +
               ") tp ON t.IDTESSERA = tp.IDTESSERA AND tp.rn = 1 " +
               "LEFT JOIN anagrafica_codfiscale a ON tp.CODFISDIP = a.CODFISCALE " +
               "LEFT JOIN dipartimento d ON t.SEDE = d.CODSEDE ";
    }

    // IL MOTORE SQL ORA CALCOLA LO STATO (Fonte di verità unica)
    private String getBaseQuery() {
        return "SELECT t.IDTESSERA, t.CODTIPOTESSERA, d.DESCRIZIONE AS SEDE, t.DATAORAINDISPONIBILITA, " +
               "td.CODICEINTERNO, tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
               "a.NOME, a.COGNOME, " +
               "CASE " +
               "  WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA <= CURRENT_TIMESTAMP THEN 'indisponibile' " +
               "  WHEN (t.DATAORAINDISPONIBILITA IS NULL OR t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP) " +
               "       AND tp.DATAORAFINEASSEGNAZIONE IS NOT NULL AND tp.DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP " +
               "       AND TRIM(tp.CODFISDIP) IS NOT NULL THEN 'occupata' " +
               "  WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
               "       AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL) THEN 'libera' " +
               "  ELSE 'nd' " +
               "END AS STATO_CALCOLATO " +
               getFromClause();
    }

    @Override
    public List<TesseraFiltroDTO> getTessereByFilters(JsonArray filters, int page, int pageSize) {
        List<TesseraFiltroDTO> result = new ArrayList<>();
        List<Object> params = new ArrayList<>();
        
        String whereClause = buildWhereClause(filters, params);
        String baseQuery = getBaseQuery() + whereClause + " ORDER BY tp.DATAORAINIZIOASSEGNAZIONE DESC NULLS LAST, t.IDTESSERA DESC";

        int minRow = (page - 1) * pageSize + 1;
        int maxRow = page * pageSize;

        String paginatedQuery = 
            "SELECT * FROM (" +
            "  SELECT a.*, ROWNUM rnum FROM (" + baseQuery + ") a " +
            "  WHERE ROWNUM <= ?" +
            ") WHERE rnum >= ?";

        try (PreparedStatement ps = conn.prepareStatement(paginatedQuery)) {
            int i = 1;
            for (Object p : params) ps.setString(i++, p.toString());
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
                    
                    // LETTURA DIRETTA DELLO STATO CALCOLATO DAL DB
                    dto.setStato(rs.getString("STATO_CALCOLATO"));

                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");

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
        
        String countQuery = "SELECT COUNT(*) " + getFromClause() + whereClause;

        try (PreparedStatement ps = conn.prepareStatement(countQuery)) {
            int i = 1;
            for (Object p : params) ps.setString(i++, p.toString());
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return rs.getInt(1);
            }
        } catch (SQLException e) {
            System.err.println("Errore countTessereByFilters: " + e.getMessage());
        }
        return 0;
    }
    
    @Override
    public TesseraFiltroDTO getTesseraById(String idTessera) {
        String sql = "SELECT * FROM (" +
                     "  SELECT t.IDTESSERA, t.CODTIPOTESSERA, t.SEDE, t.DATAORAINDISPONIBILITA, " +
                     "         td.CODICEINTERNO, tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
                     "         a.NOME, a.COGNOME, " +
                     "         CASE " +
                     "           WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA <= CURRENT_TIMESTAMP THEN 'indisponibile' " +
                     "           WHEN (t.DATAORAINDISPONIBILITA IS NULL OR t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP) " +
                     "                AND tp.DATAORAFINEASSEGNAZIONE IS NOT NULL AND tp.DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP " +
                     "                AND TRIM(tp.CODFISDIP) IS NOT NULL THEN 'occupata' " +
                     "           WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
                     "                AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL) THEN 'libera' " +
                     "           ELSE 'nd' " +
                     "         END AS STATO_CALCOLATO " +
                     "  FROM tessera t " +
                     "  LEFT JOIN tesseradecode td ON t.IDTESSERA = td.IDTESSERA " +
                     "  LEFT JOIN tesseradipend tp ON t.IDTESSERA = tp.IDTESSERA " +
                     "  LEFT JOIN anagrafica_codfiscale a ON tp.CODFISDIP = a.CODFISCALE " +
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
                    
                    // LETTURA DIRETTA DELLO STATO CALCOLATO DAL DB
                    dto.setStato(rs.getString("STATO_CALCOLATO"));

                    Timestamp tsIndisp = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    Timestamp tsInizio = rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE");
                    Timestamp tsFine = rs.getTimestamp("DATAORAFINEASSEGNAZIONE");

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
        
        String sql = "SELECT tp.CODFISDIP, tp.DATAORAINIZIOASSEGNAZIONE, tp.DATAORAFINEASSEGNAZIONE, " +
                     "       a.NOME, a.COGNOME " +
                     "FROM tesseradipend tp " +
                     "LEFT JOIN anagrafica_codfiscale a ON tp.CODFISDIP = a.CODFISCALE " +
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

        String sql = "SELECT " +
                "  COUNT(t.IDTESSERA) AS totali, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA <= CURRENT_TIMESTAMP THEN 1 ELSE 0 END) AS indisponibili, " +
                "  SUM(CASE WHEN (t.DATAORAINDISPONIBILITA IS NULL OR t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP) " +
                "            AND tp.DATAORAFINEASSEGNAZIONE IS NOT NULL AND tp.DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP " +
                "            AND TRIM(tp.CODFISDIP) IS NOT NULL THEN 1 ELSE 0 END) AS occupate, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA IS NOT NULL AND t.DATAORAINDISPONIBILITA > CURRENT_TIMESTAMP " +
                "            AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL) THEN 1 ELSE 0 END) AS libere, " +
                "  SUM(CASE WHEN t.DATAORAINDISPONIBILITA IS NULL " +
                "            AND (tp.DATAORAFINEASSEGNAZIONE IS NULL OR tp.DATAORAFINEASSEGNAZIONE <= CURRENT_TIMESTAMP OR TRIM(tp.CODFISDIP) IS NULL) THEN 1 ELSE 0 END) AS nd " +
                "FROM tessera t " +
                "LEFT JOIN ( " +
                "    SELECT IDTESSERA, CODFISDIP, DATAORAFINEASSEGNAZIONE, " +
                "           ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
                "    FROM tesseradipend " +
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