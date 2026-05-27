package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;


/**
 * -----------------------------------------------------------------------------
 * SERVIZIO: Invalida Tessera
 * DESCRIZIONE: Imposta una data di indisponibilità sulla tessera e, a cascata, ne revoca l'eventuale assegnazione in corso.
 * METODO: PUT
 * URL: http://host:port/ApplicativoBadgeVVF/InvalidaTessera/{idTessera}
 *
 * BODY ESEMPIO (JSON):
 * {
 * "dataOraIndisponibilita": "31/12/9999 23:59:59"
 * }
 * -----------------------------------------------------------------------------
 */
@WebServlet("/InvalidaTessera/*")
public class InvalidaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTessera = pathInfo.substring(1);

        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        
        JsonObject json;
        try {
            json = JsonParser.parseString(sb.toString()).getAsJsonObject();
        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        String dataIndispStr = getStringSafe(json, "dataOraIndisponibilita");

        if (isBlank(dataIndispStr)) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro dataOraIndisponibilita mancante.");
            return;
        }

        LocalDateTime dataIndisp;
        try {
            dataIndisp = LocalDateTime.parse(dataIndispStr, formatter);
        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        Properties props = loadDbProps();
        if(props == null) { sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config"); return; }

        Tessera1DAO daoTessera = null;
        TesseraDipend1DAO daoAssegnaz = null;

        try {
            daoTessera = new Tessera1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoAssegnaz = new TesseraDipend1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            
            // Invalida: 1. Aggiorna TESSERA1
            boolean invalidata = daoTessera.invalidaTessera(idTessera, dataIndisp);
            
            if (invalidata) {
                // 2. Cascata: Revoca l'assegnazione in corso (se presente) usando la stessa data
                daoAssegnaz.revocaAssegnazioneAttiva(idTessera, dataIndisp);
                sendSuccessResponse(response, "Tessera invalidata e relativa assegnazione revocata con successo.");
            } else {
                sendErrorResponse(response, HttpServletResponse.SC_NOT_FOUND, "Tessera non trovata.");
            }

        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoTessera != null) daoTessera.closeConnection();
            if (daoAssegnaz != null) daoAssegnaz.closeConnection();
        }
    }

 // --- Metodi di utilità standardizzati (usali anche nelle altre due servlet) ---
    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) { props.load(is); return props; }
        } catch (Exception e) {}
        return null;
    }
    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }
    private boolean isBlank(String s) { return s == null || s.trim().isEmpty(); }
    
    private void sendErrorResponse(HttpServletResponse response, int statusCode, String message) throws IOException {
        response.setContentType("application/json"); response.setCharacterEncoding("UTF-8"); response.setStatus(statusCode);
        JsonObject errorObj = new JsonObject(); errorObj.addProperty("esito", "KO"); errorObj.addProperty("messaggio", message);
        response.getWriter().print(new Gson().toJson(errorObj));
    }
    private void sendSuccessResponse(HttpServletResponse response, String message) throws IOException {
        response.setContentType("application/json"); response.setCharacterEncoding("UTF-8"); response.setStatus(HttpServletResponse.SC_OK);
        JsonObject obj = new JsonObject(); obj.addProperty("esito", "OK"); obj.addProperty("messaggio", message);
        response.getWriter().print(new Gson().toJson(obj));
    }
}
