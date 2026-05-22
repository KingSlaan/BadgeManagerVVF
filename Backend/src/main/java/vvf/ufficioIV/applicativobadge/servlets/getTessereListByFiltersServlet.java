package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.Properties;

@WebServlet("/getTessereListByFiltersServlet")
public class getTessereListByFiltersServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

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
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Body della richiesta vuoto o mancante.");
            return;
        }

        JsonObject requestObj;
        try {
            // 2. Parsing e validazione sintassi JSON
            requestObj = JsonParser.parseString(bodyJson).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "JSON malformato o non valido.");
            return;
        }

        try {
            // 3. Estrazione e validazione Filtri
            JsonArray filters = new JsonArray();
            if (requestObj.has("filters") && !requestObj.get("filters").isJsonNull()) {
                if (!requestObj.get("filters").isJsonArray()) {
                    sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'filters' deve essere un array.");
                    return;
                }
                filters = requestObj.getAsJsonArray("filters");
                
                // Controlliamo che ogni filtro abbia la struttura corretta
                for (JsonElement el : filters) {
                    if (!el.isJsonObject()) {
                        sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Ogni elemento in 'filters' deve essere un oggetto.");
                        return;
                    }
                    JsonObject filter = el.getAsJsonObject();
                    if (!filter.has("field") || !filter.has("operator") || !filter.has("value")) {
                        sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Ogni filtro deve contenere 'field', 'operator' e 'value'.");
                        return;
                    }
                }
            }

            // 4. Estrazione e validazione Paginazione
            int page = 1;
            int pageSize = 10;
            if (requestObj.has("pagination") && !requestObj.get("pagination").isJsonNull()) {
                if (!requestObj.get("pagination").isJsonObject()) {
                    sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Il parametro 'pagination' deve essere un oggetto.");
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
                    sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "I parametri 'page' e 'pageSize' devono essere numeri interi.");
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

            // 7. Costruzione JSON di risposta per il Successo
            Gson gson = new Gson();
            JsonObject responseJson = new JsonObject();
            responseJson.add("data", gson.toJsonTree(dataList));
            
            JsonObject paginationOut = new JsonObject();
            paginationOut.addProperty("page", page);
            paginationOut.addProperty("pageSize", pageSize);
            paginationOut.addProperty("totalItems", totalItems);
            
            responseJson.add("pagination", paginationOut);

            // Invia risposta OK
            response.setStatus(HttpServletResponse.SC_OK);
            PrintWriter out = response.getWriter();
            out.print(gson.toJson(responseJson));
            out.flush();

        } catch (Exception e) {
            // Questo catch intercetta solo i veri errori lato server (es. DB offline)
            System.err.println("[getTessereListByFiltersServlet] Errore interno: " + e.getMessage());
            e.printStackTrace();
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno del server durante il caricamento dei dati.");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        sendErrorResponse(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Metodo non consentito. Utilizzare POST.");
    }

    /**
     * Metodo di utilità per standardizzare e inviare risposte d'errore in JSON.
     */
    private void sendErrorResponse(HttpServletResponse response, int statusCode, String message) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(statusCode);
        
        JsonObject errorObj = new JsonObject();
        errorObj.addProperty("esito", "KO");
        errorObj.addProperty("messaggio", message);
        
        PrintWriter out = response.getWriter();
        out.print(new Gson().toJson(errorObj));
        out.flush();
    }
}