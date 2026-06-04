package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAO;
import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getDipartimentiServlet
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera la lista completa di tutti i dipartimenti registrati a database.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Nessun parametro richiesto.
 * Non sono necessari né Query Parameters né Body.
 *
 * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Dipartimenti recuperati con successo (N record trovati).",
 * "data": [
 * {
 * // NOTA: I campi riflettono la struttura della classe DipartimentoDTO
 * "id": 1,               
 * "nome": "Dipartimento Esempio" 
 * },
 * ...
 * ] 
 * }
 * * 🚫 RESPONSE KO (Casi di errore - HTTP 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 405 : "Endpoint supporta solo GET." (Se viene effettuata una chiamata POST)
 * - HTTP 500 : "Configurazione DB non trovata." (Errore lettura properties)
 * - HTTP 500 : "Errore interno: <dettaglio eccezione>" (Errore di connessione o query)
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getDipartimentiServlet")
public class GetDipartimentiServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("[getDipartimentiServlet] >>> SERVLET INIZIALIZZATA - mapping: /getDipartimentiServlet");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[getDipartimentiServlet] >>> Inizio doGet");

        // Carica config DB
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                        "Configurazione DB non trovata.");
                return;
            }
            props.load(is);
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        DipartimentoDAO dao = null;
        try {
            dao = new DipartimentoDAOJDBCImpl(ip, port, db, user, pwd);
            List<DipartimentoDTO> lista = dao.getAllDipartimenti();

            System.out.println("[getDipartimentiServlet] >>> Record trovati: " + lista.size());

            ResponseUtil.sendOk(response, "Dipartimenti recuperati con successo (" + lista.size() + " record trovati).", lista);

        } catch (Exception e) {
            System.err.println("[getDipartimentiServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Errore interno: " + e.getMessage());
        } finally {
            if (dao != null) dao.closeConnection();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED,
                "Endpoint supporta solo GET.");
    }
}