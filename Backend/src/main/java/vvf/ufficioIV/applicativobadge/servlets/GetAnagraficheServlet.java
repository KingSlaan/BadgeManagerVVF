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

import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /getAnagraficheServlet
 * METODI HTTP  : GET, POST
 * DESCRIZIONE  : Recupera la lista dei dipendenti dall'anagrafica (MAX 100 record).
 * GET restituisce i primi 100 record.
 * POST con body JSON filtra per nome, cognome o codice fiscale.
 * ==========================================================================================
 * 📥 REQUEST POST (Body JSON)
 * ------------------------------------------------------------------------------------------
 * {
 * "filters": [
 * {
 * "field": "cognome",       // "codFiscale", "nome" o "cognome"
 * "operator": "contains",   // "equals" o "contains"
 * "value": "rossi"
 * }
 * ]
 * }
 * ==========================================================================================
 */
@WebServlet("/getAnagraficheServlet")
public class GetAnagraficheServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final int MAX_RESULTS_LIMIT = 100;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("[GetAnagraficheServlet] >>> Chiamata GET (Nessun filtro, max " + MAX_RESULTS_LIMIT + " record)");
        eseguiRicerca(response, null);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        System.out.println("[GetAnagraficheServlet] >>> Chiamata POST (Possibili filtri, max " + MAX_RESULTS_LIMIT + " record)");

        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }

        String bodyJson = sb.toString();
        JsonArray filters = null;

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

        eseguiRicerca(response, filters);
    }

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

        AnagraficaCodFiscale1DAOJDBCImpl dao = null;
        try {
            dao = new AnagraficaCodFiscale1DAOJDBCImpl(ip, port, db, user, pwd);
            List<AnagraficaCodFiscale> dataList = dao.getAnagraficheByFilters(filters, MAX_RESULTS_LIMIT);

            ResponseUtil.sendOk(
                response,
                "Ricerca completata (" + dataList.size() + " record trovati).",
                dataList
            );

        } catch (Exception e) {
            System.err.println("[GetAnagraficheServlet] Errore interno: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno del server durante il caricamento dei dati.");
        } finally {
            if (dao != null) dao.closeConnection();
        }
    }
}