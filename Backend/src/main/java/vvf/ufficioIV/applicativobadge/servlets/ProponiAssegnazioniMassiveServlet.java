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

import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /proponiAssegnazioniMassive
 * METODO HTTP  : POST
 * DESCRIZIONE  : Riceve una lista di dipendenti e un ID Tessera di partenza. Restituisce
 *                la lista accoppiando ogni dipendente a una tessera libera disponibile 
 *                (ordine Top-Down). Se le tessere scarseggiano, fallisce atomicamente.
 * ==========================================================================================
 */
@WebServlet("/proponiAssegnazioniMassive")
public class ProponiAssegnazioniMassiveServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        System.out.println("[ProponiAssegnazioniMassiveServlet] >>> Inizio elaborazione proposta");

        // ── 1. Lettura Body JSON ───────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();

        if (isBlank(bodyJson)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body della richiesta vuoto o mancante.");
            return;
        }

        JsonObject json;
        try {
            json = JsonParser.parseString(bodyJson).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        // ── 2. Estrazione Parametri ────────────────────────────────────────────
        if (!json.has("dipendenti") || !json.get("dipendenti").isJsonArray()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'dipendenti' mancante o non è un array.");
            return;
        }
        JsonArray dipendentiArray = json.getAsJsonArray("dipendenti");
        
        String numeroPartenzaTopDown = getStringSafe(json, "numeroPartenzaTopDown");

        if (dipendentiArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'array 'dipendenti' è vuoto.");
            return;
        }
        if (isBlank(numeroPartenzaTopDown)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'numeroPartenzaTopDown' mancante.");
            return;
        }
        if (numeroPartenzaTopDown.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'ID Tessera di partenza supera i 10 caratteri consentiti.");
            return;
        }
        
        numeroPartenzaTopDown = "0".repeat(10 - numeroPartenzaTopDown.length()) + numeroPartenzaTopDown;
        System.out.println("[DEBUG] numeroPartenzaTopDown = "+numeroPartenzaTopDown);

        int quantitaRichiesta = dipendentiArray.size();
        System.out.println("[ProponiAssegnazioniMassiveServlet] Richieste " + quantitaRichiesta + " tessere a partire da: " + numeroPartenzaTopDown);

        // ── 3. Connessione DB ──────────────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore di configurazione DB.");
            return;
        }

        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));

            // ── 4. Query Estrazione Tessere Libere Top-Down ────────────────────
            /* 
             * Manteniamo la logica esatta di 'Tessera Libera' del tuo DAO, aggiungendo il filtro sull'ID 
             * di partenza. Limitiamo l'estrazione esattamente al numero di tessere che ci servono tramite ROWNUM.
             */
            String sql = "SELECT IDTESSERA FROM (" +
                    "  SELECT t.IDTESSERA " +
                    "  FROM tessera t " +
                    "  LEFT JOIN ( " +
                    "      SELECT IDTESSERA, CODFISDIP, DATAORAFINEASSEGNAZIONE, " +
                    "             ROW_NUMBER() OVER(PARTITION BY IDTESSERA ORDER BY DATAORAINIZIOASSEGNAZIONE DESC) as rn " +
                    "      FROM tesseradipend " +
                    "  ) tp ON t.IDTESSERA = tp.IDTESSERA AND tp.rn = 1 " +
                    "  WHERE t.IDTESSERA <= ? " +
                    "    AND t.DATAORAINDISPONIBILITA > SYSDATE" +
                    "    AND (tp.DATAORAFINEASSEGNAZIONE < SYSTIMESTAMP)" +
                    "  ORDER BY t.IDTESSERA DESC " +
                    ") WHERE ROWNUM <= ?";

            List<String> tessereLibereTrovate = new ArrayList<>();
            
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setString(1, numeroPartenzaTopDown.trim()); // Il pad degli zeri (es. "0000000010") fa funzionare l'operatore >= perfettamente
                ps.setInt(2, quantitaRichiesta); // Ci fermiamo quando ne troviamo abbastanza
                
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        tessereLibereTrovate.add(rs.getString("IDTESSERA"));
                    }
                }
            }

            // ── 5. Controllo di Scarsità (Atomicità Logica) ────────────────────
            if (tessereLibereTrovate.size() < quantitaRichiesta) {
                String msg = String.format("Tessere insufficienti per soddisfare la richiesta. Richieste: %d, Libere trovate (a partire da %s): %d.", 
                                           quantitaRichiesta, numeroPartenzaTopDown, tessereLibereTrovate.size());
                System.out.println("[ProponiAssegnazioniMassiveServlet] Blocco: " + msg);
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, msg);
                return;
            }

            // ── 6. Accoppiamento e Risposta (Zip delle liste) ──────────────────
            JsonArray responseData = new JsonArray();
            for (int i = 0; i < quantitaRichiesta; i++) {
                JsonObject dipendenteReq = dipendentiArray.get(i).getAsJsonObject();
                String idTesseraProposta = tessereLibereTrovate.get(i);
                
                JsonObject dipendenteProp = new JsonObject();
                dipendenteProp.addProperty("codFiscale", getStringSafe(dipendenteReq, "codFiscale"));
                dipendenteProp.addProperty("nome", getStringSafe(dipendenteReq, "nome"));
                dipendenteProp.addProperty("cognome", getStringSafe(dipendenteReq, "cognome"));
                dipendenteProp.addProperty("idTessera", idTesseraProposta);
                
                responseData.add(dipendenteProp);
            }

            System.out.println("[ProponiAssegnazioniMassiveServlet] <<< Proposta creata con successo.");
            ResponseUtil.sendOk(response, "Proposta di assegnazione generata con successo.", responseData);

        } catch (Exception e) {
            System.err.println("[ProponiAssegnazioniMassiveServlet] Errore DB: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il controllo delle tessere libere: " + e.getMessage());
        } finally {
            if (conn != null) {
                try { conn.close(); } 
                catch (SQLException ex) { System.err.println("Errore in chiusura connessione: " + ex.getMessage()); }
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste POST.");
    }

    // --- Metodi di utilità locali ---
    
    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) { props.load(is); return props; }
        } catch (Exception e) {}
        return null;
    }

    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString().trim() : null; }
        catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) { return s == null || s.trim().isEmpty(); }
}