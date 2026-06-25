package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDipend;
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
    
    // Aggiungere in tutti i DAO
    public TesseraDipend1DAOJDBCImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public boolean insertAssegnazione(TesseraDipend a) throws SQLException {
        String sql = "INSERT INTO tesseradipend (IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE) " +
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
    public TesseraDipend getAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio) {
        String sql = "SELECT IDTESSERA, CODFISDIP, DATAORAINIZIOASSEGNAZIONE, DATAORAFINEASSEGNAZIONE " +
                     "FROM tesseradipend WHERE IDTESSERA = ? AND CODFISDIP = ? AND DATAORAINIZIOASSEGNAZIONE = ?";
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
    public List<TesseraDipend> getAssegnazioniByTessera(String idTessera) {
        List<TesseraDipend> list = new ArrayList<>();
        String sql = "SELECT * FROM tesseradipend WHERE IDTESSERA = ? ORDER BY DATAORAINIZIOASSEGNAZIONE DESC";
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
    public List<TesseraDipend> getAssegnazioniByDipendente(String codFisDip) {
        List<TesseraDipend> list = new ArrayList<>();
        String sql = "SELECT * FROM tesseradipend WHERE CODFISDIP = ? ORDER BY DATAORAINIZIOASSEGNAZIONE DESC";
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
        String sql = "DELETE FROM tesseradipend WHERE IDTESSERA = ? AND CODFISDIP = ? AND DATAORAINIZIOASSEGNAZIONE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, idTessera);
            ps.setString(2, codFisDip);
            ps.setTimestamp(3, Timestamp.valueOf(dataOraInizio));
            return ps.executeUpdate() == 1;
        }
    }

    private TesseraDipend mapResultSetToEntity(ResultSet rs) throws SQLException {
        TesseraDipend t = new TesseraDipend();
        t.setIdTessera(rs.getString("IDTESSERA"));
        t.setCodFisDip(rs.getString("CODFISDIP"));
        t.setDataOraInizioAssegnazione(rs.getTimestamp("DATAORAINIZIOASSEGNAZIONE").toLocalDateTime());
        t.setDataOraFineAssegnazione(rs.getTimestamp("DATAORAFINEASSEGNAZIONE").toLocalDateTime());
        return t;
    }
    
    @Override
    public boolean revocaAssegnazioneAttiva(String idTessera, LocalDateTime dataOraFine) throws SQLException {
        // La logica è: aggiorno la data di fine per l'assegnazione attualmente attiva...
        // NUOVA REGOLA: ...ma SOLO SE la data di fine attuale è MAGGIORE della nuova data di indisponibilità!
        String sql = "UPDATE tesseradipend " +
                     "SET DATAORAFINEASSEGNAZIONE = ? " +
                     "WHERE IDTESSERA = ? " +
                     "AND DATAORAFINEASSEGNAZIONE > CURRENT_TIMESTAMP " +
                     "AND DATAORAFINEASSEGNAZIONE > ?"; // <-- Il nuovo vincolo SQL
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setTimestamp(1, Timestamp.valueOf(dataOraFine));
            ps.setString(2, idTessera);
            ps.setTimestamp(3, Timestamp.valueOf(dataOraFine)); // Passiamo il parametro per il check
            return ps.executeUpdate() > 0; // Se la condizione è falsa, aggiornerà 0 righe (comportamento desiderato)
        }
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