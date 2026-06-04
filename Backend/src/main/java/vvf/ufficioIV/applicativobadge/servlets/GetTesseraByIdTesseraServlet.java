package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getTesseraByIdTesseraServlet
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera i dettagli di una specifica tessera (TesseraFiltroDTO) a partire dal suo ID.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : Nessun body richiesto
 * Query Params :
 * - idTessera (String) [OBBLIGATORIO] -> L'identificativo univoco della tessera da cercare.
 * * Esempio URL  : /getTesseraByIdTesseraServlet?idTessera=12345
 *
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessera recuperata con successo.",
 * "data": {
 * // Struttura dell'oggetto TesseraFiltroDTO
 * "idTessera": "12345",
 * "altriCampi": "..." 
 * }
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 404, 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request)          : "Il parametro 'idTessera' è obbligatorio." (Manca o è vuoto)
 * - HTTP 404 (Not Found)            : "Nessuna tessera trovata con l'ID specificato."
 * - HTTP 405 (Method Not Allowed)   : "Metodo non consentito. Utilizzare GET." (Se chiamata in POST)
 * - HTTP 500 (Internal Server Error): "Errore di configurazione del server." (Errore di connessione o properties)
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getTesseraByIdTesseraServlet")
public class GetTesseraByIdTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 1. Estrazione del parametro dalla querystring
        String idTessera = request.getParameter("idTessera");

        if (idTessera == null || idTessera.trim().isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'idTessera' è obbligatorio.");
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
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore di configurazione del server.");
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
            ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Nessuna tessera trovata con l'ID specificato.");
            return;
        }

        // Risposta OK — tessera trovata, restituita in "data"
        ResponseUtil.sendOk(response, "Tessera recuperata con successo.", tessera);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare GET.");
    }
}