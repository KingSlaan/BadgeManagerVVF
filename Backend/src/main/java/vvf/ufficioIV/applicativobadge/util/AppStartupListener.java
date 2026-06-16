package vvf.ufficioIV.applicativobadge.util;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;
import java.io.InputStream;
import java.util.Properties;

/**
 * Ascoltatore che intercetta l'avvio e lo spegnimento dell'applicazione su Tomcat.
 * 
 * 	EXTRA: 	Run As -> Maven Build ... -> Goals = clean package -> Run
 * 			Refresh 
 */
@WebListener
public class AppStartupListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        
        String versione = "N/D";
        
        // 1. Metodo "Antiproiettile" per i server Java EE: usiamo il ContextClassLoader
        try (InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("version.properties")) {
            if (is != null) {
                Properties props = new Properties();
                props.load(is);
                versione = props.getProperty("app.version", "N/D");
                
                // 2. Aggiungiamo la miglioria del Dev Mode anche in console!
                if (versione.startsWith("${")) {
                    versione = "2.0.1 (Dev Mode)";
                }
            } else {
                System.err.println("[TesserAct] ATTENZIONE: version.properties non trovato dal ClassLoader!");
            }
        } catch (Exception e) {
            System.err.println("[TesserAct] ERRORE lettura version.properties: " + e.getMessage());
        }

        // 3. Recuperiamo il Context Path
        String contextPath = sce.getServletContext().getContextPath();
        if (contextPath == null || contextPath.isEmpty()) {
            contextPath = "/";
        }
        String urlApp = "http://localhost:8080" + contextPath;

        // 4. Generiamo l'ASCII Art
        String banner = 
            "\n\n" +
            "  _______                        ___        __  \n" +
            " /_  __/__  ______________  ____/   | _____/ /_ \n" +
            "  / / / _ \\/ ___/ ___/ _ \\/ ___/ /| |/ ___/ __/ \n" +
            " / / /  __(__  |__  )  __/ /  / ___ / /__/ /_   \n" +
            "/_/  \\___/____/____/\\___/_/  /_/  |_\\___/\\__/   \n" +
            "                                                \n" +
            " __   _____ ___ ___ ___ ___  _  _ ___           \n" +
            " \\ \\ / / __| _ \\ __|_ _/ _ \\| \\| | __|          \n" +
            "  \\ V /| _||   /__ \\| | (_) | .` | _|           \n" +
            "   \\_/ |___|_|_\\___/___\\___/|_|\\_|___| " + versione + "\n" +
            "                                                \n" +
            "================================================\n" +
            " :: App Iniziata con Successo :: \n" +
            " :: URL Ascolto : " + urlApp + " \n" +
            "================================================\n\n";

        // 5. Stampiamo in console!
        System.out.println(banner);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("\n[TesserAct] Applicazione fermata in modo sicuro.\n");
    }
}