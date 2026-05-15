package vvf.ufficioIV.applicativobadge;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

public class TestConnessioneDB {

    public static void main(String[] args) {

        String pathProperties = "src/main/webapp/WEB-INF/db.properties";

        Properties props = new Properties();
        Connection conn = null;

        try {
            // 1. Carica properties
            props.load(new FileInputStream(pathProperties));

            String ip   = props.getProperty("db.ip");
            String port = props.getProperty("db.port");
            String name = props.getProperty("db.name");
            String user = props.getProperty("db.user");
            String pwd  = props.getProperty("db.password");

            System.out.println(">>> Tentativo connessione a: " + ip + ":" + port + "/" + name);

            // 2. Carica driver Oracle
            Class.forName("oracle.jdbc.OracleDriver");

            // 3. Apri connessione
            String url = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + name;
            conn = DriverManager.getConnection(url, user, pwd);

            System.out.println(">>> Connessione OK!");

            // 4. Query di prova banale
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT 1 FROM DUAL");
            if (rs.next()) {
                System.out.println(">>> Query di prova OK! Risultato: " + rs.getString(1));
            }

            rs.close();
            stmt.close();

        } catch (Exception e) {
            System.err.println(">>> ERRORE: " + e.getMessage());
            e.printStackTrace();
        } finally {
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                    System.out.println(">>> Connessione chiusa.");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}