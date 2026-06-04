package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.CronologiaTesseraDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;


/**
 * ==========================================================================================
 * API ENDPOINT : /tesseraCronology/{idTessera}
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera la cronologia completa associata a una specifica tessera.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Tipo         : Path Parameter
 * URL di es.   : /tesseraCronology/0000090801
 * Content-Type : Non applicabile
 * Body         : Nessuno
 * Parametri    : 
 * - {idTessera} (String, obbligatorio): L'ID della tessera va inserito direttamente 
 * nell'URL in coda al path.
 *
 * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Cronologia recuperata con successo (N record trovati).",
 * "data": [
 * {
 * // ... proprietà mappate dal DTO CronologiaTesseraDTO ...
 * },
 * {
 * // ...
 * }
 * ]
 * }
 * * 🚫 RESPONSE KO (Casi di errore)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request) : "ID Tessera mancante nell'URL." (chiamata base senza ID)
 * - HTTP 405 (Method Not Allowed) : "Metodo non consentito. Utilizzare GET." (su POST e PUT)
 * - HTTP 500 (Server Error): "Configurazione DB non trovata."
 * - HTTP 500 (Server Error): "Errore interno: <messaggio eccezione DB/Java>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione dell'errore come indicato sopra>"
 * }
 * ==========================================================================================
 */
@WebServlet("/tesseraCronology/*")
public class TesseraCronologyServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[TesseraCronologyServlet] >>> Inizio doGet");

        // 1. Estrazione path parameter
        String pathInfo = request.getPathInfo(); // es: "/0000090801"
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTessera = pathInfo.substring(1).trim();
        System.out.println("[TesseraCronologyServlet] idTessera: " + idTessera);

        // 2. Caricamento configurazione DB
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
                return;
            }
            props.load(is);
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        RicercaTessereDAO dao = null;
        try {
            dao = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);
            List<CronologiaTesseraDTO> cronologia = dao.getCronologiaByTessera(idTessera);

            System.out.println("[TesseraCronologyServlet] Record trovati: " + cronologia.size());

            // 3. Risposta OK con pattern "data"
            ResponseUtil.sendOk(response,
                    "Cronologia recuperata con successo (" + cronologia.size() + " record trovati).",
                    cronologia);

        } catch (Exception e) {
            System.err.println("[TesseraCronologyServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (dao != null) dao.closeConnection();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }
}