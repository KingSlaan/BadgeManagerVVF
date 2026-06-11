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

@WebServlet("/getVersion")
public class GetVersionServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        Properties props = new Properties();
        
        // Carichiamo il file version.properties
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/version.properties")) {
            if (is != null) {
                props.load(is);
            } else {
                System.err.println("[GetVersionServlet] Attenzione: file /WEB-INF/version.properties non trovato.");
            }
        } catch (Exception e) {
            System.err.println("[GetVersionServlet] Errore lettura properties: " + e.getMessage());
        }

        // Estraiamo i dati, fornendo dei valori di default (fallback) nel caso in cui il file manchi o le chiavi siano vuote
        String appName = props.getProperty("app.name", "Applicativo Badge VVF");
        String version = props.getProperty("app.version", "N/D");
        String buildDate = props.getProperty("app.build.date", "N/D");

        // Popoliamo il DTO
        AppVersionDTO versionDTO = new AppVersionDTO(appName, version, buildDate);

        // Rispondiamo al frontend sfruttando l'utility standard
        ResponseUtil.sendOk(response, "Informazioni di versione recuperate con successo.", versionDTO);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }
}