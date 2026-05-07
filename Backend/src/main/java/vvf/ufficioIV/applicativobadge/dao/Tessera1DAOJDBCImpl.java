package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.Tessera1;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Tessera1DAOJDBCImpl implements Tessera1DAO {

    private Connection conn;

    public Tessera1DAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            // Driver per Oracle DB
            Class.forName("oracle.jdbc.OracleDriver");
            
            // L'URL di Oracle varia se si usa SID o Service Name. 
            // Formato standard thin: jdbc:oracle:thin:@//host:port/service_name
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (Tessera1DAO): " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public boolean insertTessera(Tessera1 t) throws SQLException {
        String sql = "INSERT INTO TESSERA1 (IDTESSERA, CODTIPOTESSERA, SEDE, DATAORAINDISPONIBILITA, TESSERA_ATE) " +
                     "VALUES (?, ?, ?, ?, ?)";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, t.getIdTessera());
            ps.setString(2, t.getCodTipoTessera());
            ps.setString(3, t.getSede());
            
            // Conversione da LocalDateTime a java.sql.Timestamp (sicuro per Oracle)
            if (t.getDataOraIndisponibilita() != null) {
                ps.setTimestamp(4, Timestamp.valueOf(t.getDataOraIndisponibilita()));
            } else {
                ps.setNull(4, Types.DATE); // O Types.TIMESTAMP
            }
            
            ps.setInt(5, t.getTesseraAte() != null ? t.getTesseraAte() : 0);
            
            int rows = ps.executeUpdate();
            return rows == 1;
        }
    }

    @Override
    public Tessera1 getTesseraById(String idTessera) {
        String sql = "SELECT IDTESSERA, CODTIPOTESSERA, SEDE, DATAORAINDISPONIBILITA, TESSERA_ATE " +
                     "FROM TESSERA1 WHERE IDTESSERA = ?";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Tessera1 t = new Tessera1();
                    t.setIdTessera(rs.getString("IDTESSERA"));
                    t.setCodTipoTessera(rs.getString("CODTIPOTESSERA"));
                    t.setSede(rs.getString("SEDE"));
                    
                    Timestamp ts = rs.getTimestamp("DATAORAINDISPONIBILITA");
                    if (ts != null) {
                        t.setDataOraIndisponibilita(ts.toLocalDateTime());
                    }
                    
                    t.setTesseraAte(rs.getInt("TESSERA_ATE"));
                    return t;
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore nel recupero della tessera: " + e.getMessage());
            e.printStackTrace();
        }
        return null; // Ritorna null se non trovata
    }

    @Override
    public List<Tessera1> getAllTessere() {
        List<Tessera1> results = new ArrayList<>();
        String sql = "SELECT * FROM TESSERA1 ORDER BY DATAORAINDISPONIBILITA DESC";

        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Tessera1 t = new Tessera1();
                t.setIdTessera(rs.getString("IDTESSERA"));
                t.setCodTipoTessera(rs.getString("CODTIPOTESSERA"));
                t.setSede(rs.getString("SEDE"));
                
                Timestamp ts = rs.getTimestamp("DATAORAINDISPONIBILITA");
                if (ts != null) {
                    t.setDataOraIndisponibilita(ts.toLocalDateTime());
                }
                
                t.setTesseraAte(rs.getInt("TESSERA_ATE"));
                results.add(t);
            }
        } catch (SQLException e) {
            System.err.println("Errore nel recupero di tutte le tessere: " + e.getMessage());
            e.printStackTrace();
        }
        return results;
    }

    @Override
    public boolean deleteTesseraById(String idTessera) throws SQLException {
        String sql = "DELETE FROM TESSERA1 WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            int rows = ps.executeUpdate();
            return rows == 1;
        }
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (Tessera1DAO): " + e.getMessage());
        }
    }
}