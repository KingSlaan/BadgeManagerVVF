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

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getTessereListByFiltersServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Restituisce una lista di tessere applicando filtri di ricerca dinamici 
 * e supportando la paginazione dei risultati.
 * ==========================================================================================
 * * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "filters": [                           // (Opzionale) Se presente, DEVE essere un array
 * {
 * "field": "nome_colonna",           // (Obbligatorio nel filtro) es. "matricola"
 * "operator": "=",                   // (Obbligatorio nel filtro) es. "=", "LIKE", ">"
 * "value": "12345"                   // (Obbligatorio nel filtro) valore da cercare
 * }
 * ],
 * "pagination": {                        // (Opzionale) Se presente, DEVE essere un oggetto
 * "page": 1,                           // (Opzionale) intero, default: 1 se mancante o < 1
 * "pageSize": 10                       // (Opzionale) intero, default: 10 se mancante o < 1
 * }
 * }
 * *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkWithPagination
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Ricerca completata (X record trovati).",
 * "data": [
 * // ... array di oggetti TesseraFiltroDTO ...
 * ],
 * "pagination": {
 * "page": 1,
 * "pageSize": 10,
 * "totalItems": 42
 * }
 * }
 * *
 * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 405 : "Metodo non consentito. Utilizzare POST." (Se viene chiamata in GET)
 * - HTTP 400 : "Body della richiesta vuoto o mancante."
 * - HTTP 400 : "JSON malformato o non valido."
 * - HTTP 400 : "Il parametro 'filters' deve essere un array."
 * - HTTP 400 : "Ogni elemento in 'filters' deve essere un oggetto."
 * - HTTP 400 : "Ogni filtro deve contenere 'field', 'operator' e 'value'."
 * - HTTP 400 : "Il parametro 'pagination' deve essere un oggetto."
 * - HTTP 400 : "I parametri 'page' e 'pageSize' devono essere numeri interi."
 * - HTTP 500 : "Errore interno del server durante il caricamento dei dati." (Es. DB offline)
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore tra quelle elencate sopra>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getTessereListByFiltersServlet")
public class GetTessereListByFiltersServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 1. Lettura Body
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }

        String bodyJson = sb.toString();

        if (bodyJson == null || bodyJson.trim().isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body della richiesta vuoto o mancante.");
            return;
        }

        JsonObject requestObj;
        try {
            // 2. Parsing e validazione sintassi JSON
            requestObj = JsonParser.parseString(bodyJson).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "JSON malformato o non valido.");
            return;
        }

        try {
            // 3. Estrazione e validazione Filtri
            JsonArray filters = new JsonArray();
            if (requestObj.has("filters") && !requestObj.get("filters").isJsonNull()) {
                if (!requestObj.get("filters").isJsonArray()) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'filters' deve essere un array.");
                    return;
                }
                filters = requestObj.getAsJsonArray("filters");

                // Controlliamo che ogni filtro abbia la struttura corretta
                for (JsonElement el : filters) {
                    if (!el.isJsonObject()) {
                        ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Ogni elemento in 'filters' deve essere un oggetto.");
                        return;
                    }
                    JsonObject filter = el.getAsJsonObject();
                    if (!filter.has("field") || !filter.has("operator") || !filter.has("value")) {
                        ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Ogni filtro deve contenere 'field', 'operator' e 'value'.");
                        return;
                    }
                }
            }

            // 4. Estrazione e validazione Paginazione
            int page = 1;
            int pageSize = 10;
            if (requestObj.has("pagination") && !requestObj.get("pagination").isJsonNull()) {
                if (!requestObj.get("pagination").isJsonObject()) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'pagination' deve essere un oggetto.");
                    return;
                }

                JsonObject pagObj = requestObj.getAsJsonObject("pagination");
                try {
                    if (pagObj.has("page")) {
                        page = pagObj.get("page").getAsInt();
                        if (page < 1) page = 1; // Normalizzazione silente
                    }
                    if (pagObj.has("pageSize")) {
                        pageSize = pagObj.get("pageSize").getAsInt();
                        if (pageSize < 1) pageSize = 10; // Normalizzazione silente
                    }
                } catch (NumberFormatException | UnsupportedOperationException e) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "I parametri 'page' e 'pageSize' devono essere numeri interi.");
                    return;
                }
            }

            // 5. Caricamento credenziali DB
            Properties props = new Properties();
            try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
                if (is == null) {
                    throw new Exception("File di configurazione DB non trovato.");
                }
                props.load(is);
            }

            String ip   = props.getProperty("db.ip");
            String port = props.getProperty("db.port");
            String db   = props.getProperty("db.name");
            String user = props.getProperty("db.user");
            String pwd  = props.getProperty("db.password");

            // 6. Esecuzione query tramite DAO
            RicercaTessereDAO dao = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);
            List<TesseraFiltroDTO> dataList;
            int totalItems = 0;

            try {
                totalItems = dao.countTessereByFilters(filters);
                dataList = dao.getTessereByFilters(filters, page, pageSize);
            } finally {
                dao.closeConnection();
            }

            // 7. Risposta OK con dati e paginazione
            ResponseUtil.sendOkWithPagination(
                response,
                "Ricerca completata (" + totalItems + " record trovati).",
                dataList,
                page,
                pageSize,
                totalItems
            );

        } catch (Exception e) {
            // Questo catch intercetta solo i veri errori lato server (es. DB offline)
            System.err.println("[getTessereListByFiltersServlet] Errore interno: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno del server durante il caricamento dei dati.");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare POST.");
    }
}