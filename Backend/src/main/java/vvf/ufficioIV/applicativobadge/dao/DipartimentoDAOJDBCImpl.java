package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class DipartimentoDAOJDBCImpl implements DipartimentoDAO {

    private Connection conn;

    public DipartimentoDAOJDBCImpl(String ip, String port, String dbName,
                                    String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (DipartimentoDAO): " + e.getMessage());
            e.printStackTrace();
        }
    }

    
    @Override
    public List<DipartimentoDTO> getDipartimentiByFilters(JsonArray filters) {
        List<DipartimentoDTO> results = new ArrayList<>();
        List<Object> params = new ArrayList<>();
        StringBuilder where = new StringBuilder(" WHERE 1=1 ");

        if (filters != null) {
            for (JsonElement el : filters) {
                JsonObject filter = el.getAsJsonObject();
                
                String field = filter.has("field") ? filter.get("field").getAsString() : "";
                String operator = filter.has("operator") ? filter.get("operator").getAsString() : "";
                String value = filter.has("value") ? filter.get("value").getAsString() : "";

                // Mappatura campi JSON sulle colonne DB
                String dbColumn = "";
                switch (field) {
                    case "codSede": dbColumn = "CODSEDE"; break;
                    case "descrizione": dbColumn = "DESCRIZIONE"; break;
                    default: continue; // ignora filtri non riconosciuti
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

        String sql = "SELECT CODSEDE, DESCRIZIONE FROM dipartimento" + where.toString();

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int i = 1;
            for (Object p : params) {
                ps.setString(i++, p.toString());
            }
            
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    DipartimentoDTO dto = new DipartimentoDTO(
                        rs.getString("CODSEDE"),
                        rs.getString("DESCRIZIONE")
                    );
                    results.add(dto);
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getDipartimentiByFilters: " + e.getMessage());
            e.printStackTrace();
        }
        return results;
    }
    
    
    @Override
    public List<DipartimentoDTO> getDipartimentiConConteggioTessere() {
        List<DipartimentoDTO> results = new ArrayList<>();
        
        // La LEFT JOIN assicura che se una sede non ha tessere, esce comunque con COUNT = 0
        String sql = "SELECT d.CODSEDE, d.DESCRIZIONE, COUNT(t.IDTESSERA) AS CONTEGGIO " +
                     "FROM dipartimento d " +
                     "LEFT JOIN tessera t ON d.CODSEDE = t.SEDE " +
                     "GROUP BY d.CODSEDE, d.DESCRIZIONE " +
                     "ORDER BY d.DESCRIZIONE";

        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                DipartimentoDTO dto = new DipartimentoDTO(
                    rs.getString("CODSEDE"),
                    rs.getString("DESCRIZIONE")
                );
                // Impostiamo il conteggio appena calcolato dal DB
                dto.setConteggioTessere(rs.getInt("CONTEGGIO"));
                
                results.add(dto);
            }
        } catch (SQLException e) {
            System.err.println("Errore getDipartimentiConConteggioTessere: " + e.getMessage());
            e.printStackTrace();
        }
        
        return results;
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (DipartimentoDAO): " + e.getMessage());
        }
    }
}