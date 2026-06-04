package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /invalidaTessera/{idTessera}
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Invalida una specifica tessera e revoca a cascata l'eventuale 
 * assegnazione attualmente in corso, utilizzando la data/ora fornita.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * URL Path     : idTessera deve essere accodato all'URL (es. /invalidaTessera/123)
 * Body         :
 * {
 * "dataOraIndisponibilita": "dd/MM/yyyy HH:mm:ss"  // Es: "04/06/2026 15:30:00" (obbligatorio)
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessera invalidata e relativa assegnazione revocata con successo.",
 * "data": null
 * }
 * * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 404, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "ID Tessera mancante nell'URL."
 * - HTTP 400 : "Body JSON non valido."
 * - HTTP 400 : "Parametro dataOraIndisponibilita mancante."
 * - HTTP 400 : "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss)."
 * - HTTP 404 : "Tessera non trovata."
 * - HTTP 500 : "Errore DB Config" oppure "Errore interno: <dettaglio_errore>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/invalidaTessera/*")
public class InvalidaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
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
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        String dataIndispStr = getStringSafe(json, "dataOraIndisponibilita");

        if (isBlank(dataIndispStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro dataOraIndisponibilita mancante.");
            return;
        }

        LocalDateTime dataIndisp;
        try {
            dataIndisp = LocalDateTime.parse(dataIndispStr, formatter);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config");
            return;
        }

        Tessera1DAO daoTessera = null;
        TesseraDipend1DAO daoAssegnaz = null;

        try {
            daoTessera  = new Tessera1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoAssegnaz = new TesseraDipend1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));

            // Invalida: 1. Aggiorna TESSERA1
            boolean invalidata = daoTessera.invalidaTessera(idTessera, dataIndisp);

            if (invalidata) {
                // 2. Cascata: Revoca l'assegnazione in corso (se presente) usando la stessa data
                daoAssegnaz.revocaAssegnazioneAttiva(idTessera, dataIndisp);
                ResponseUtil.sendOkNoData(response, "Tessera invalidata e relativa assegnazione revocata con successo.");
            } else {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera non trovata.");
            }

        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoTessera != null)  daoTessera.closeConnection();
            if (daoAssegnaz != null) daoAssegnaz.closeConnection();
        }
    }

    // --- Metodi di utilità locali ---

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
}