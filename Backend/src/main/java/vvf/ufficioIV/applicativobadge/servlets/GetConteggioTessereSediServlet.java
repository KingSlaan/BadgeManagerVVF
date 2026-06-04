package vvf.ufficioIV.applicativobadge.servlets;

import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAO;
import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;
import vvf.ufficioIV.applicativobadge.dto.GraficoSediDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;


/**
 * ==========================================================================================
 * API ENDPOINT : /getConteggioTessereSedi
 * METODO HTTP  : GET
 * DESCRIZIONE  : Recupera il conteggio totale delle tessere associate a ciascuna sede 
 * (dipartimento) presente a sistema. Formatta i dati specificamente per 
 * l'utilizzo all'interno di grafici lato Frontend, restituendo due array 
 * paralleli: uno per le descrizioni delle sedi (labels) e uno per i conteggi (values).
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : Nessuno (o application/json)
 * Path Param   : Nessuno
 * Body         : Nessuno (Metodo GET)
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Dati grafico sedi recuperati con successo.",
 * "data": {
 * "labels": ["Uffici Centrali", "Salerno", "Catanzaro", "Venezia", "Milano"],
 * "values": [40, 20, 12, 11, 25]
 * }
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore - HTTP 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 405 (Method Not Allowed) : "L'endpoint supporta solo richieste GET." (Se invocata in POST/PUT/DELETE)
 * - HTTP 500 (Server Error)       : "Configurazione DB non trovata."
 * "Errore interno durante il recupero dei conteggi: <dettaglio_eccezione>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore indicata sopra>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getConteggioTessereSedi")
public class GetConteggioTessereSediServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[GetConteggioTessereSediServlet] >>> Inizio doGet");

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

        DipartimentoDAO daoDipartimento = null;

        try {
            daoDipartimento = new DipartimentoDAOJDBCImpl(ip, port, db, user, pwd);

            // 2. Recupero lista dipartimenti con i conteggi dal DB
            List<DipartimentoDTO> listaDipartimenti = daoDipartimento.getDipartimentiConConteggioTessere();

            // 3. Mappatura dei dati nel formato richiesto dal Frontend
            GraficoSediDTO datiGrafico = new GraficoSediDTO();
            for (DipartimentoDTO dip : listaDipartimenti) {
                // Inseriamo la descrizione nel vettore labels e il conteggio nel vettore values
                datiGrafico.addData(dip.getDescrizione(), dip.getConteggioTessere());
            }

            // 4. Risposta al frontend tramite la classe di Utility
            // Passando 'datiGrafico', Gson lo serializzerà esattamente in { labels: [...], values: [...] }
            ResponseUtil.sendOk(response, "Dati grafico sedi recuperati con successo.", datiGrafico);
            System.out.println("[GetConteggioTessereSediServlet] >>> Fine doGet con successo.");

        } catch (Exception e) {
            System.err.println("[GetConteggioTessereSediServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il recupero dei conteggi: " + e.getMessage());
        } finally {
            if (daoDipartimento != null) daoDipartimento.closeConnection();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste GET.");
    }
}