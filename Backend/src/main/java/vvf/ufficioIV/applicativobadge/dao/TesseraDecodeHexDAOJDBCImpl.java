package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDecodeHex;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

public class TesseraDecodeHexDAOJDBCImpl implements TesseraDecodeHexDAO {

    private Connection conn;

    // Costruttore base
    public TesseraDecodeHexDAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (TesseraDecodeHexDAO): " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    // COSTRUTTORE FONDAMENTALE PER LA TRANSAZIONE NELLA SERVLET
    public TesseraDecodeHexDAOJDBCImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public boolean insertTesseraDecodeHex(TesseraDecodeHex hexEntity) throws SQLException {
        String sql = "INSERT INTO tesseradecode_hex (IDTESSERA, CODICEINTERNO_PREF, CODICEINTERNO_SUFF, PREFISSO_HEX, SUFFISSO_HEX) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, hexEntity.getIdTessera());
            ps.setString(2, hexEntity.getCodiceInternoPref());
            ps.setString(3, hexEntity.getCodiceInternoSuff());
            ps.setString(4, hexEntity.getPrefissoHex());
            ps.setString(5, hexEntity.getSuffissoHex());
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public TesseraDecodeHex getByIdTessera(String idTessera) {
        String sql = "SELECT * FROM tesseradecode_hex WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    TesseraDecodeHex t = new TesseraDecodeHex();
                    t.setIdTessera(rs.getString("IDTESSERA"));
                    t.setCodiceInternoPref(rs.getString("CODICEINTERNO_PREF"));
                    t.setCodiceInternoSuff(rs.getString("CODICEINTERNO_SUFF"));
                    t.setPrefissoHex(rs.getString("PREFISSO_HEX"));
                    t.setSuffissoHex(rs.getString("SUFFISSO_HEX"));
                    return t;
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getByIdTessera in TesseraDecodeHex: " + e.getMessage());
        }
        return null;
    }

    @Override
    public boolean deleteByIdTessera(String idTessera) throws SQLException {
        String sql = "DELETE FROM tesseradecode_hex WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            return ps.executeUpdate() == 1;
        }
    }
    

    @Override
    public Map<String, String> getMappaValoriHex() {
        Map<String, String> mappa = new HashMap<>();
        String sql = "SELECT VALORE, VALORE_HEX FROM T_VALORI_HEX_IDTESSERA1";
        
        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                String key = rs.getString("VALORE");
                String value = rs.getString("VALORE_HEX");
                
                // Se la colonna DB è numerica, "04" viene letto come "4". 
                // Aggiungiamo uno '0' davanti se la lunghezza è 1 per tornare al formato "04".
                if (key != null && key.length() == 1) {
                    key = "0" + key; 
                }
                
                mappa.put(key, value);
            }
        } catch (SQLException e) {
            System.err.println("Errore caricamento dizionario HEX: " + e.getMessage());
        }
        return mappa;
    }
}