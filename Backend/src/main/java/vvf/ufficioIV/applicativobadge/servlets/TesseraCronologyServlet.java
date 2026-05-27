package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.CronologiaTesseraDTO;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.Properties;


/**
 * -----------------------------------------------------------------------------
 * SERVIZIO: Cronologia Tessera
 * DESCRIZIONE: Restituisce l'elenco (array) di tutte le assegnazioni storiche di una specifica tessera.
 * METODO: GET
 * URL: http://host:port/ApplicativoBadgeVVF/TesseraCronology/{idTessera}
 * * BODY: Nessuno
 * -----------------------------------------------------------------------------
 */
@WebServlet("/TesseraCronology/*")
public class TesseraCronologyServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        // 1. Estrazione del Path Parameter
        String pathInfo = request.getPathInfo(); // es: "/0000090801"
        if (pathInfo == null || pathInfo.equals("/")) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTessera = pathInfo.substring(1).trim();

        // 2. Caricamento Configurazione DB
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) throw new Exception("File di configurazione DB non trovato.");
            props.load(is);
        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore di configurazione del server.");
            return;
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        RicercaTessereDAO dao = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);
        List<CronologiaTesseraDTO> cronologia;

        try {
            // 3. Chiamata al DB
            cronologia = dao.getCronologiaByTessera(idTessera);
        } finally {
            dao.closeConnection();
        }

        // 4. Costruzione e invio Risposta OK
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);

        Gson gson = new Gson();
        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("esito", "OK");
        responseJson.addProperty("messaggio", "Cronologia recuperata con successo (" + cronologia.size() + " record trovati).");
        responseJson.add("data", gson.toJsonTree(cronologia));

        PrintWriter out = response.getWriter();
        out.print(gson.toJson(responseJson));
        out.flush();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        sendErrorResponse(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }
    
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        sendErrorResponse(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }

    /**
     * Metodo di utilità per standardizzare e inviare risposte d'errore in JSON.
     */
    private void sendErrorResponse(HttpServletResponse response, int statusCode, String message) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(statusCode);
        
        JsonObject errorObj = new JsonObject();
        errorObj.addProperty("esito", "KO");
        errorObj.addProperty("messaggio", message);
        
        PrintWriter out = response.getWriter();
        out.print(new Gson().toJson(errorObj));
        out.flush();
    }
}