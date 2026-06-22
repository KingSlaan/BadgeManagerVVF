package vvf.ufficioIV.applicativobadge.servlets;

import vvf.ufficioIV.applicativobadge.dto.AppVersionDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getVersion
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera le informazioni di versione dell'applicazione (Nome, Versione, Data Build)
 * lette dinamicamente dal file version.properties autocompilato da Maven.
 * ==========================================================================================
 */
@WebServlet("/getVersion")
public class GetVersionServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        Properties props = new Properties();
        
        // MODIFICA MAVEN: Carichiamo il file dal Classpath (risolve i file dentro src/main/resources)
        try (InputStream is = GetVersionServlet.class.getResourceAsStream("/version.properties")) {
            if (is != null) {
                props.load(is);
            } else {
                System.err.println("[GetVersionServlet] Attenzione: file version.properties non trovato nel classpath.");
            }
        } catch (Exception e) {
            System.err.println("[GetVersionServlet] Errore lettura properties: " + e.getMessage());
        }

        // Estraiamo i dati, fornendo dei valori di default (fallback) nel caso in cui le chiavi siano vuote
        String appName = props.getProperty("app.name", "Applicativo Badge VVF");
        String version = props.getProperty("app.version", "N/D");
        String buildDate = props.getProperty("app.build.date", "N/D");
        String codename = props.getProperty("app.codename", "N/D"); 

        // --- MIGLIORIA PER ECLIPSE (DEV MODE) ---
        // Se leggiamo il placeholder letterale, significa che Eclipse ha bypassato Maven
        if (version.startsWith("${")) {
            version = "(Dev Mode locale)";
            buildDate = "Sviluppo in corso";
            codename = "Olympus-Dev"; // Codename di fallback temporaneo per lo sviluppo
        }
        
        // Popoliamo il DTO esistente
        AppVersionDTO versionDTO = new AppVersionDTO(appName, version, buildDate, codename);

        // Rispondiamo al frontend sfruttando la tua utility standard JSON
        ResponseUtil.sendOk(response, "Informazioni di versione recuperate con successo.", versionDTO);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }
}