package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

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
    public List<DipartimentoDTO> getAllDipartimenti() {
        List<DipartimentoDTO> results = new ArrayList<>();
        // Leggi dalla vista: solo i due campi che ti servono
        String sql = "SELECT CODSEDE, DESCRIZIONE FROM DIPARTIMENTO1";

        try (PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                DipartimentoDTO dto = new DipartimentoDTO(
                    rs.getString("CODSEDE"),
                    rs.getString("DESCRIZIONE")
                );
                results.add(dto);
            }

        } catch (SQLException e) {
            System.err.println("Errore getAllDipartimenti: " + e.getMessage());
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