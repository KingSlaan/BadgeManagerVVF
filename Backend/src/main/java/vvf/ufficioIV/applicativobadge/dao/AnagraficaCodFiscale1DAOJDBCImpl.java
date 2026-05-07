package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale1;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AnagraficaCodFiscale1DAOJDBCImpl implements AnagraficaCodFiscale1DAO {

    private Connection conn;

    public AnagraficaCodFiscale1DAOJDBCImpl(String ip, String port, String dbName, String userName, String pwd) {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + dbName;
            conn = DriverManager.getConnection(dbUrl, userName, pwd);
        } catch (Exception e) {
            System.err.println("Errore connessione DB (AnagraficaCodFiscale1DAO): " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public boolean insertAnagrafica(AnagraficaCodFiscale1 a) throws SQLException {
        String sql = "INSERT INTO ANAGRAFICA_CODFISCALE1 (CODFISCALE, NOME, COGNOME) VALUES (?, ?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, a.getCodFiscale());
            ps.setString(2, a.getNome());
            ps.setString(3, a.getCognome());
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public AnagraficaCodFiscale1 getByCodFiscale(String codFiscale) {
        String sql = "SELECT CODFISCALE, NOME, COGNOME FROM ANAGRAFICA_CODFISCALE1 WHERE CODFISCALE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codFiscale);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new AnagraficaCodFiscale1(
                        rs.getString("CODFISCALE"), 
                        rs.getString("NOME"), 
                        rs.getString("COGNOME")
                    );
                }
            }
        } catch (SQLException e) {
            System.err.println("Errore getByCodFiscale: " + e.getMessage());
        }
        return null;
    }

    @Override
    public List<AnagraficaCodFiscale1> getAllAnagrafiche() {
        List<AnagraficaCodFiscale1> list = new ArrayList<>();
        String sql = "SELECT CODFISCALE, NOME, COGNOME FROM ANAGRAFICA_CODFISCALE1 ORDER BY COGNOME, NOME";
        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(new AnagraficaCodFiscale1(
                    rs.getString("CODFISCALE"), 
                    rs.getString("NOME"), 
                    rs.getString("COGNOME")
                ));
            }
        } catch (SQLException e) {
            System.err.println("Errore getAllAnagrafiche: " + e.getMessage());
        }
        return list;
    }

    @Override
    public boolean deleteByCodFiscale(String codFiscale) throws SQLException {
        String sql = "DELETE FROM ANAGRAFICA_CODFISCALE1 WHERE CODFISCALE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codFiscale);
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public void closeConnection() {
        try {
            if (conn != null && !conn.isClosed()) conn.close();
        } catch (SQLException e) {
            System.err.println("Errore chiusura connessione (AnagraficaCodFiscale1DAO): " + e.getMessage());
        }
    }
}