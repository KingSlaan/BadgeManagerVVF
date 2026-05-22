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
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Properties;

@WebServlet("/getTesseraByIdTesseraServlet")
public class getTesseraByIdTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 1. Estrazione del parametro dalla querystring
        String idTessera = request.getParameter("idTessera");

        if (idTessera == null || idTessera.trim().isEmpty()) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'idTessera' è obbligatorio.");
            return;
        }

        // 2. Caricamento credenziali DB
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                throw new Exception("File di configurazione DB non trovato.");
            }
            props.load(is);
        } catch (Exception e) {
            System.err.println("[getTesseraByIdTesseraServlet] Errore: " + e.getMessage());
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore di configurazione del server.");
            return;
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        // 3. Esecuzione interrogazione
        RicercaTessereDAO dao = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);
        TesseraFiltroDTO tessera;

        try {
            tessera = dao.getTesseraById(idTessera.trim());
        } finally {
            dao.closeConnection();
        }

        // 4. Verifica risultato e invio risposta
        if (tessera == null) {
            sendErrorResponse(response, HttpServletResponse.SC_NOT_FOUND, "Nessuna tessera trovata con l'ID specificato.");
            return;
        }

        // Risposta OK
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);

        Gson gson = new Gson();
        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("esito", "OK");
        responseJson.addProperty("messaggio", "Tessera recuperata con successo.");
        responseJson.add("data", gson.toJsonTree(tessera));

        PrintWriter out = response.getWriter();
        out.print(gson.toJson(responseJson));
        out.flush();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
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