package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDecode1;
import java.sql.*;

public class TesseraDecode1DAOJDBCImpl implements TesseraDecode1DAO {

    private Connection conn;

    public TesseraDecode1DAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (TesseraDecode1DAO): " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public boolean insertTesseraDecode(TesseraDecode1 tDecode) throws SQLException {
        String sql = "INSERT INTO TESSERADECODE1 (IDTESSERA, CODICEINTERNO) VALUES (?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, tDecode.getIdTessera());
            ps.setString(2, tDecode.getCodiceInterno());
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public TesseraDecode1 getByIdTessera(String idTessera) {
        String sql = "SELECT IDTESSERA, CODICEINTERNO FROM TESSERADECODE1 WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new TesseraDecode1(rs.getString("IDTESSERA"), rs.getString("CODICEINTERNO"));
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getByIdTessera: " + e.getMessage());
        }
        return null;
    }

    @Override
    public TesseraDecode1 getByCodiceInterno(String codiceInterno) {
        String sql = "SELECT IDTESSERA, CODICEINTERNO FROM TESSERADECODE1 WHERE CODICEINTERNO = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codiceInterno);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new TesseraDecode1(rs.getString("IDTESSERA"), rs.getString("CODICEINTERNO"));
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getByCodiceInterno: " + e.getMessage());
        }
        return null;
    }

    @Override
    public boolean deleteByIdTessera(String idTessera) throws SQLException {
        String sql = "DELETE FROM TESSERADECODE1 WHERE IDTESSERA = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (TesseraDecode1DAO): " + e.getMessage());
        }
    }
}