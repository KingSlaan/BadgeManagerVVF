package vvf.ufficioIV.applicativobadge.servlets;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.StatisticheTessereDTO;
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
 * API ENDPOINT : /getStatisticheTessere
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera le statistiche generali dello stato delle tessere a sistema,
 * calcolando il numero totale, le tessere attualmente assegnate, quelle
 * non assegnate e quelle contrassegnate come inutilizzabili.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : Nessuno (Richiesta GET)
 * Body         : Nessuno
 * Parametri    : Nessuno
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Statistiche recuperate con successo.",
 * "data": {
 * "generale": {
 * "totali": <numero>,
 * "assegnati": <numero>,
 * "nonAssegnati": <numero>,
 * "inutilizzabili": <numero>
 * }
 * }
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 405 (Method Not Allowed) : L'endpoint è stato richiamato in POST (o altri metodi) invece che in GET.
 * - HTTP 500 (Server Error)       : Configurazione DB mancante, errori di connessione o sintassi SQL.
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getStatisticheTessere")
public class GetStatisticheTessereServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[GetStatisticheTessereServlet] >>> Inizio doGet");

        // 1. Carica config DB
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

        RicercaTessereDAO daoRicerca = null;

        try {
            daoRicerca = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);

            // 2. Recupero statistiche tramite query centralizzata
            StatisticheTessereDTO statistiche = daoRicerca.getStatisticheGenerali();

            // 3. Risposta al frontend tramite la classe di Utility
            // Passando 'statistiche', Gson produrrà esattamente la struttura { "data": { "generale": { ... } } }
            ResponseUtil.sendOk(response, "Statistiche recuperate con successo.", statistiche);
            System.out.println("[GetStatisticheTessereServlet] >>> Fine doGet con successo.");

        } catch (Exception e) {
            System.err.println("[GetStatisticheTessereServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il recupero delle statistiche: " + e.getMessage());
        } finally {
            if (daoRicerca != null) daoRicerca.closeConnection();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste GET.");
    }
}