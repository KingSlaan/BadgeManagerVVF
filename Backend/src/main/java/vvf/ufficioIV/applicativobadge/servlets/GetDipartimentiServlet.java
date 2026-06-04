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

import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAO;
import vvf.ufficioIV.applicativobadge.dao.DipartimentoDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getDipartimentiServlet
 * METODI HTTP  : GET, POST
 * DESCRIZIONE  : Recupera la lista delle sedi/dipartimenti. 
 *                Se invocata in GET o in POST senza filtri, restituisce tutti i record.
 *                Se invocata in POST con filtri JSON, restituisce i record filtrati per
 *                codice sede o descrizione.
 * ==========================================================================================
 * 📥 REQUEST GET (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Nessun parametro richiesto. Non sono necessari né Query Parameters né Body.
 *
 * 📥 REQUEST POST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 *   "filters": [                           // (Opzionale) Se presente, DEVE essere un array
 *     {
 *       "field": "descrizione",            // (Obbligatorio nel filtro) "codSede" o "descrizione"
 *       "operator": "contains",            // (Obbligatorio nel filtro) es. "equals", "contains"
 *       "value": "roma"                    // (Obbligatorio nel filtro) valore da cercare
 *     }
 *   ]
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOk
 * Struttura  :
 * {
 *   "esito": "OK",
 *   "messaggio": "Ricerca completata (X record trovati).",
 *   "data": [
 *     {
 *       "codSede": "RM",
 *       "descrizione": "COMANDO PROVINCIALE ROMA"
 *     },
 *     {
 *       // ... altri dipartimenti ...
 *     }
 *   ]
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "JSON malformato o non valido."
 * - HTTP 400 : "Il parametro 'filters' deve essere un array."
 * - HTTP 400 : "Ogni elemento in 'filters' deve essere un oggetto."
 * - HTTP 400 : "Ogni filtro deve contenere 'field', 'operator' e 'value'."
 * - HTTP 500 : "Configurazione DB non trovata." (Errore lettura properties)
 * - HTTP 500 : "Errore lettura configurazione DB."
 * - HTTP 500 : "Errore interno del server durante il caricamento dei dati." (Es. DB offline)
 * Struttura  :
 * {
 *   "esito": "KO",
 *   "messaggio": "<descrizione specifica dell'errore tra quelle elencate sopra>"
 * }
 * ==========================================================================================
 */
@WebServlet("/getDipartimentiServlet")
public class GetDipartimentiServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("[GetDipartimentiServlet] >>> SERVLET INIZIALIZZATA");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("[GetDipartimentiServlet] >>> Chiamata GET (Nessun filtro)");
        // Passando null, il DAO restituirà tutti i record
        eseguiRicerca(response, null);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        System.out.println("[GetDipartimentiServlet] >>> Chiamata POST (Possibili filtri)");

        // 1. Lettura Body
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }

        String bodyJson = sb.toString();
        JsonArray filters = null;

        // 2. Parsing e validazione se il body è presente
        // Se il body è vuoto, non andiamo in errore, semplicemente filters rimane null
        if (bodyJson != null && !bodyJson.trim().isEmpty()) {
            try {
                JsonObject requestObj = JsonParser.parseString(bodyJson).getAsJsonObject();
                if (requestObj.has("filters") && !requestObj.get("filters").isJsonNull()) {
                    if (!requestObj.get("filters").isJsonArray()) {
                        ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'filters' deve essere un array.");
                        return;
                    }
                    filters = requestObj.getAsJsonArray("filters");

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
            } catch (JsonSyntaxException | IllegalStateException e) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "JSON malformato o non valido.");
                return;
            }
        }

        // 3. Esecuzione ricerca
        eseguiRicerca(response, filters);
    }

    /**
     * Metodo centralizzato per eseguire la connessione al DB e interrogare il DAO
     * sia in caso di GET che di POST.
     */
    private void eseguiRicerca(HttpServletResponse response, JsonArray filters) throws IOException {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
                return;
            }
            props.load(is);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore lettura configurazione DB.");
            return;
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        DipartimentoDAO dao = null;
        try {
            dao = new DipartimentoDAOJDBCImpl(ip, port, db, user, pwd);
            List<DipartimentoDTO> dataList = dao.getDipartimentiByFilters(filters);

            ResponseUtil.sendOk(
                response,
                "Ricerca completata (" + dataList.size() + " record trovati).",
                dataList
            );

        } catch (Exception e) {
            System.err.println("[GetDipartimentiServlet] Errore interno: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno del server durante il caricamento dei dati.");
        } finally {
            if (dao != null) dao.closeConnection();
        }
    }
}