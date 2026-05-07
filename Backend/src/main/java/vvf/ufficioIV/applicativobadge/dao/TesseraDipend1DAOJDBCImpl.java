package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDipend1;
import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TesseraDipend1DAOJDBCImpl implements TesseraDipend1DAO {

    private Connection conn;

    public TesseraDipend1DAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (TesseraDipend1DAO): " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public boolean insertAssegnazione(TesseraDipend1 a) throws SQLException {
        String sql = "INSERT INTO TESSERADIPEND1 (IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE) " +
                     "VALUES (?, ?, ?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, a.getIdTessera());
            ps.setString(2, a.getCodFisDip());
            ps.setTimestamp(3, Timestamp.valueOf(a.getDataOraInizioAssegnazione()));
            ps.setTimestamp(4, Timestamp.valueOf(a.getDataOraFineAssegnazione()));
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public TesseraDipend1 getAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio) {
        String sql = "SELECT IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE " +
                     "FROM TESSERADIPEND1 WHERE IDTESSERA = ? AND CODFISDIP = ? AND DATAORAINIZIOASSEGNAZIONE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            ps.setString(2, codFisDip);
            ps.setTimestamp(3, Timestamp.valueOf(dataOraInizio));
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapResultSetToEntity(rs);
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getAssegnazione: " + e.getMessage());
        }
        return null;
    }

    @Override
    public List<TesseraDipend1> getAssegnazioniByTessera(String idTessera) {
        List<TesseraDipend1> list = new ArrayList<>();
        String sql = "SELECT * FROM TESSERADIPEND1 WHERE IDTESSERA = ? ORDER BY DATAORAINIZIOASSEGNAZIONE DESC";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) list.add(mapResultSetToEntity(rs));
            }
        } catch (SQLException e) {
            System.err.println("Errore getAssegnazioniByTessera: " + e.getMessage());
        }
        return list;
    }

    @Override
    public List<TesseraDipend1> getAssegnazioniByDipendente(String codFisDip) {
        List<TesseraDipend1> list = new ArrayList<>();
        String sql = "SELECT * FROM TESSERADIPEND1 WHERE CODFISDIP = ? ORDER BY DATAORAINIZIOASSEGNAZIONE DESC";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codFisDip);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) list.add(mapResultSetToEntity(rs));
            }
        } catch (SQLException e) {
            System.err.println("Errore getAssegnazioniByDipendente: " + e.getMessage());
        }
        return list;
    }

    @Override
    public boolean deleteAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio) throws SQLException {
        String sql = "DELETE FROM TESSERADIPEND1 WHERE IDTESSERA = ? AND CODFISDIP = ? AND DATAORAINIZIOASSEGNAZIONE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            ps.setString(2, codFisDip);
            ps.setTimestamp(3, Timestamp.valueOf(dataOraInizio));
            return ps.executeUpdate() == 1;
        }
    }

    private TesseraDipend1 mapResultSetToEntity(ResultSet rs) throws SQLException {
        TesseraDipend1 t = new TesseraDipend1();
        t.setIdTessera(rs.getString("IDTESSERA"));
        t.setCodFisDip(rs.getString("CODFISDIP"));
        t.setDataOraInizioAssegnazione(rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE").toLocalDateTime());
        t.setDataOraFineAssegnazione(rs.getTimestamp("DATAORAFINEASSEGNAZIONE").toLocalDateTime());
        return t;
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (TesseraDipend1DAO): " + e.getMessage());
        }
    }
}