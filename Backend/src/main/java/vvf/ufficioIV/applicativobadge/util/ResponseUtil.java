package vvf.ufficioIV.applicativobadge.util;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class ResponseUtil {

    private static final Gson gson = new Gson();

    /**
     * Risposta OK con array "data"
     * Usare per: letture semplici senza paginazione
     */
    public static void sendOk(HttpServletResponse response, String messaggio, Object data)
            throws IOException {
        JsonObject res = new JsonObject();
        res.addProperty("esito", "OK");
        res.addProperty("messaggio", messaggio);
        res.add("data", gson.toJsonTree(data));
        send(response, HttpServletResponse.SC_OK, res);
    }

    /**
     * Risposta OK senza dati (operazioni di scrittura: insert, update, delete)
     * Usare per: assegnazioni, aggiornamenti, cancellazioni
     */
    public static void sendOkNoData(HttpServletResponse response, String messaggio)
            throws IOException {
        JsonObject res = new JsonObject();
        res.addProperty("esito", "OK");
        res.addProperty("messaggio", messaggio);
        res.add("data", gson.toJsonTree(null));
        send(response, HttpServletResponse.SC_OK, res);
    }

    /**
     * Risposta OK con array "data" e oggetto "pagination"
     * Usare per: letture con paginazione
     */
    public static void sendOkWithPagination(HttpServletResponse response, String messaggio,
            Object data, int page, int pageSize, int totalItems)
            throws IOException {
        JsonObject res = new JsonObject();
        res.addProperty("esito", "OK");
        res.addProperty("messaggio", messaggio);
        res.add("data", gson.toJsonTree(data));

        JsonObject pagination = new JsonObject();
        pagination.addProperty("page", page);
        pagination.addProperty("pageSize", pageSize);
        pagination.addProperty("totalItems", totalItems);
        res.add("pagination", pagination);

        send(response, HttpServletResponse.SC_OK, res);
    }

    /**
     * Risposta KO con messaggio di errore
     * Usare per: qualsiasi errore (validazione, DB, not found, ecc.)
     */
    public static void sendError(HttpServletResponse response, int status, String messaggio)
            throws IOException {
        JsonObject res = new JsonObject();
        res.addProperty("esito", "KO");
        res.addProperty("messaggio", messaggio);
        send(response, status, res);
    }

    // ── Metodo interno di invio ───────────────────────────────────────────────

    private static void send(HttpServletResponse response, int status, JsonObject body)
            throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(status);
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(body));
        out.flush();
    }
}