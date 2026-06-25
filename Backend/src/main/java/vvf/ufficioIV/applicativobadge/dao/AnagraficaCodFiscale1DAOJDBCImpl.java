package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale;
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
    
    // Aggiungere in tutti i DAO
    public AnagraficaCodFiscale1DAOJDBCImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public boolean insertAnagrafica(AnagraficaCodFiscale a) throws SQLException {
        String sql = "INSERT INTO anagrafica_codfiscale (CODFISCALE, NOME, COGNOME) VALUES (?, ?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, a.getCodFiscale());
            ps.setString(2, a.getNome());
            ps.setString(3, a.getCognome());
            return ps.executeUpdate() == 1;
        }
    }

    @Override
    public AnagraficaCodFiscale getByCodFiscale(String codFiscale) {
        String sql = "SELECT CODFISCALE, NOME, COGNOME FROM anagrafica_codfiscale WHERE CODFISCALE = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, codFiscale);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new AnagraficaCodFiscale(
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
    public List<AnagraficaCodFiscale> getAllAnagrafiche() {
        List<AnagraficaCodFiscale> list = new ArrayList<>();
        String sql = "SELECT CODFISCALE, NOME, COGNOME FROM anagrafica_codfiscale ORDER BY COGNOME, NOME";
        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(new AnagraficaCodFiscale(
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
        String sql = "DELETE FROM anagrafica_codfiscale WHERE CODFISCALE = ?";
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