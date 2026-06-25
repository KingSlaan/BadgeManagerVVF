package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.Tessera;

import java.sql.*;
import java.time.LocalDateTime;
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
    
    // NUOVO COSTRUTTORE per usare una transazione condivisa
    public Tessera1DAOJDBCImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public boolean updateSede(String idTessera, String nuovaSede) throws SQLException {
        String sql = "UPDATE tessera SET SEDE = ? WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, nuovaSede);
            ps.setString(2, idTessera);
            return ps.executeUpdate() == 1;
        }
    }
    
    public Tessera getTesseraByIdForUpdate(String idTessera) {
        // Il "FOR UPDATE" dice al DB: "Blocca questa riga in scrittura per gli altri, la sto modificando io"
        String sql = "SELECT IDTESSERA, CODTIPOTESSERA, SEDE, DATAORAINDISPONIBILITA, TESSERA_ATE " +
                     "FROM tessera WHERE IDTESSERA = ? FOR UPDATE";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Tessera t = new Tessera();
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
            System.err.println("Errore nel recupero della tessera FOR UPDATE: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
    
    @Override
    public boolean insertTessera(Tessera t) throws SQLException {
        String sql = "INSERT INTO tessera (IDTESSERA, CODTIPOTESSERA, SEDE, DATAORAINDISPONIBILITA, TESSERA_ATE) " +
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
    public Tessera getTesseraById(String idTessera) {
        String sql = "SELECT IDTESSERA, CODTIPOTESSERA, SEDE, DATAORAINDISPONIBILITA, TESSERA_ATE " +
                     "FROM tessera WHERE IDTESSERA = ?";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Tessera t = new Tessera();
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
    public List<Tessera> getAllTessere() {
        List<Tessera> results = new ArrayList<>();
        String sql = "SELECT * FROM tessera ORDER BY DATAORAINDISPONIBILITA DESC";

        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                Tessera t = new Tessera();
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
        String sql = "DELETE FROM tessera WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            int rows = ps.executeUpdate();
            return rows == 1;
        }
    }
    
    @Override
    public boolean invalidaTessera(String idTessera, LocalDateTime dataOraIndisponibilita) throws SQLException {
        String sql = "UPDATE tessera SET DATAORAINDISPONIBILITA = ? WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setTimestamp(1, Timestamp.valueOf(dataOraIndisponibilita));
            ps.setString(2, idTessera);
            return ps.executeUpdate() == 1;
        }
    }
    
    @Override
    public boolean updateCodTipoTessera(String idTessera, String codTipoTessera) throws SQLException {
        String sql = "UPDATE tessera SET CODTIPOTESSERA = ? WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codTipoTessera);
            ps.setString(2, idTessera);
            return ps.executeUpdate() == 1;
        }
    }
    
    @Override
    public boolean updateSedeECodTipo(String idTessera, String nuovaSede, String codTipoTessera) throws SQLException {
        // Unica query di UPDATE per modificare entrambi i campi contemporaneamente
        String sql = "UPDATE tessera SET SEDE = ?, CODTIPOTESSERA = ? WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, nuovaSede);
            ps.setString(2, codTipoTessera);
            ps.setString(3, idTessera);
            return ps.executeUpdate() == 1;
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