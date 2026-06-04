package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDecode1;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.Properties;


/**
 * ==========================================================================================
 * API ENDPOINT : /inserimentoTessereServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Inserimento massivo di una lista di tessere nel database. 
 * Esegue l'inserimento incrociato sulle tabelle Tessera1 e TesseraDecode1.
 * ==========================================================================================
 * * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         : Array di oggetti JSON
 * [
 * {
 * "idTessera": "stringa",     // Obbligatorio - ID della tessera
 * "codiceInterno": "stringa"  // Obbligatorio - Codice interno da associare
 * }
 * ]
 * * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessere (X) inserite correttamente.",
 * "data": null
 * }
 * * * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "Body della richiesta vuoto o mancante."
 * - HTTP 400 : "Body JSON non valido, atteso un array."
 * - HTTP 400 : "Sintassi JSON non valida."
 * - HTTP 400 : "Nessuna tessera inviata."
 * - HTTP 405 : "Usa POST" (Se l'endpoint viene chiamato in GET)
 * - HTTP 500 : "Configurazione DB non trovata."
 * - HTTP 500 : "Errore interno: Parametri obbligatori mancanti per il record con idTessera: <idTessera>"
 * - HTTP 500 : "Errore interno: Inserimento in Tessera1 fallito per idTessera: <idTessera>"
 * - HTTP 500 : "Errore interno: Inserimento in TesseraDecode1 fallito per idTessera: <idTessera>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/inserimentoTessereServlet")
public class InserimentoTessereServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private static final String        DEFAULT_SEDE             = "00";
    private static final String        DEFAULT_COD_TIPO_TESSERA = "S";
    private static final Integer       DEFAULT_TESSERA_ATE      = 0;
    private static final LocalDateTime DEFAULT_DATA_ORA_INDISP  = LocalDateTime.of(9999, 12, 31, 23, 59, 59);

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[inserimentoTessereServlet] >>> Inizio doPost");

        // 1. Leggi body JSON
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();

        if (bodyJson == null || bodyJson.trim().isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body della richiesta vuoto o mancante.");
            return;
        }

        // 2. Parsa JSON come ARRAY
        JsonArray jsonArray;
        try {
            JsonElement parsedElement = JsonParser.parseString(bodyJson);
            if (!parsedElement.isJsonArray()) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido, atteso un array.");
                return;
            }
            jsonArray = parsedElement.getAsJsonArray();
        } catch (JsonSyntaxException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Sintassi JSON non valida.");
            return;
        }

        if (jsonArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Nessuna tessera inviata.");
            return;
        }

        // 3. Carica config DB
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

        Tessera1DAO       daoTessera       = null;
        TesseraDecode1DAO daoTesseraDecode = null;
        int tessereInserite = 0;

        try {
            daoTessera       = new Tessera1DAOJDBCImpl(ip, port, db, user, pwd);
            daoTesseraDecode = new TesseraDecode1DAOJDBCImpl(ip, port, db, user, pwd);

            // 4. Cicla ed Inserisci
            for (JsonElement element : jsonArray) {
                if (!element.isJsonObject()) continue;

                JsonObject json     = element.getAsJsonObject();
                String idTessera     = getStringSafe(json, "idTessera");
                String codiceInterno = getStringSafe(json, "codiceInterno");

                if (isBlank(idTessera) || isBlank(codiceInterno)) {
                    throw new Exception("Parametri obbligatori mancanti per il record con idTessera: " + idTessera);
                }

                // INSERT TESSERA1
                boolean okTessera = daoTessera.insertTessera(new Tessera1(idTessera, DEFAULT_COD_TIPO_TESSERA, DEFAULT_SEDE, DEFAULT_DATA_ORA_INDISP, DEFAULT_TESSERA_ATE));
                if (!okTessera) throw new Exception("Inserimento in Tessera1 fallito per idTessera: " + idTessera);

                // INSERT TESSERADECODE1
                boolean okDecode = daoTesseraDecode.insertTesseraDecode(new TesseraDecode1(idTessera, codiceInterno));
                if (!okDecode) {
                    daoTessera.deleteTesseraById(idTessera); // Rollback manuale
                    throw new Exception("Inserimento in TesseraDecode1 fallito per idTessera: " + idTessera);
                }

                tessereInserite++;
            }

            // Operazione di scrittura: nessun dato da restituire, solo conferma
            ResponseUtil.sendOkNoData(response, "Tessere (" + tessereInserite + ") inserite correttamente.");

        } catch (Exception e) {
            System.err.println("[inserimentoTessereServlet] Eccezione: " + e.getMessage());
            // Gson si occuperà di fare l'escape sicuro del messaggio di errore
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoTessera != null)       daoTessera.closeConnection();
            if (daoTesseraDecode != null) daoTesseraDecode.closeConnection();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Usa POST");
    }

    // ── Utility locali ────────────────────────────────────────────────────────

    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}