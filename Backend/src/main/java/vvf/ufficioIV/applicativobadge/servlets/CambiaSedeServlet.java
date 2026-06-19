package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /cambiaSedeServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Modifica la sede e il tipo di una tessera esistente.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "idTessera": "stringa",        // (Obbligatorio) Identificativo della tessera
 * "sede": "stringa",             // (Obbligatorio) Sede da aggiornare sulla tessera
 * "codTipoTessera": "D" | "S"    // (Obbligatorio) 'D' (dipendente) o 'S' (sostitutiva)
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Dati tessera aggiornati correttamente.",
 * "data": null
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request) : Body vuoto o JSON non valido, parametri mancanti, codTipoTessera errato.
 * - HTTP 404 (Not Found)   : Tessera inesistente.
 * - HTTP 405 (Not Allowed) : L'endpoint è stato richiamato in GET invece che in POST.
 * - HTTP 500 (Server Error): Configurazione DB mancante, errori in aggiornamento DB.
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/cambiaSedeServlet")
public class CambiaSedeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[cambiaSedeServlet] >>> Inizio doPost (Transazionale)");

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
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

        // ── 2. Parsa JSON ─────────────────────────────────────────────────────
        JsonObject json;
        try {
            json = JsonParser.parseString(bodyJson).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        // ── 3. Estrai e Normalizza i campi (TUTTO UPPERCASE) ──────────────────
        String idTessera      = getStringSafe(json, "idTessera");
        String sede           = getStringSafe(json, "sede");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");

        if (idTessera != null) idTessera = idTessera.toUpperCase();
        if (sede != null) sede = sede.toUpperCase();
        if (codTipoTessera != null) codTipoTessera = codTipoTessera.toUpperCase();

        // ── 4. Validazioni Maniacali di Dominio e Schema DB ───────────────────
        
        // A. Presenza dati
        if (isBlank(idTessera) || isBlank(sede) || isBlank(codTipoTessera)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori (idTessera, sede, codTipoTessera) mancanti.");
            return;
        }

        // B. Vincoli colonne DB (Varchar2 Limits)
        if (idTessera.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera supera i 10 caratteri consentiti.");
            return;
        }
        
        if (sede.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "La sigla della sede supera i 10 caratteri consentiti.");
            return;
        }

        // C. Validazione Dominio codTipoTessera
        if (codTipoTessera.length() != 1 || (!codTipoTessera.equals("D") && !codTipoTessera.equals("S"))) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Valore codTipoTessera non valido: deve essere 'D' (dipendente) o 'S' (sostitutiva).");
            return;
        }

        // ── 5. Carica Configurazione DB ───────────────────────────────────────
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
                return;
            }
            props.load(is);
        }

        // ── 6. Avvio Connessione e Transazione Condivisa ──────────────────────
        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // 🔒 DISABILITA AUTOCOMMIT: Inizio Transazione
            conn.setAutoCommit(false);

            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);

            // VERIFICA 1: La tessera esiste? Mettiamo in Lock PESSIMISTICO la riga.
            System.out.println("[cambiaSedeServlet] Ricerca e blocco tessera...");
            Tessera1 tessera = daoTessera.getTesseraByIdForUpdate(idTessera);
            
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente a sistema.");
                return;
            }
            
            // VERIFICA 2: La tessera è operativa? (Non permettiamo di cambiare sede a tessere smarrite/invalidata)
            if (tessera.getDataOraIndisponibilita() != null && tessera.getDataOraIndisponibilita().isBefore(LocalDateTime.now())) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_FORBIDDEN, "Impossibile modificare i dati: la tessera risulta invalidata o indisponibile.");
                return;
            }

            // ESECUZIONE: Aggiorna Sede e Tipo Tessera
            System.out.println("[cambiaSedeServlet] Aggiornamento sede e codTipoTessera...");
            boolean datiAggiornati = daoTessera.updateSedeECodTipo(idTessera, sede, codTipoTessera);
            
            if (!datiAggiornati) {
                throw new SQLException("Errore fatale: la query di update non ha modificato alcuna riga.");
            }

            // ✅ TUTTO OK: CONFERMIAMO TRANSAZIONE
            conn.commit();
            System.out.println("[cambiaSedeServlet] Dati aggiornati e transazione completata con successo.");
            ResponseUtil.sendOkNoData(response, "Dati tessera aggiornati correttamente.");

        } catch (Exception e) {
            // ❌ ERRORE: ROLLBACK
            System.err.println("[cambiaSedeServlet] Eccezione riscontrata: " + e.getMessage());
            e.printStackTrace();
            
            if (conn != null) {
                try {
                    conn.rollback();
                    System.err.println("[cambiaSedeServlet] Rollback eseguito correttamente.");
                } catch (SQLException ex) {
                    System.err.println("Errore fatale durante il rollback: " + ex.getMessage());
                }
            }
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante l'aggiornamento: " + e.getMessage());
            
        } finally {
            // 🧹 CHIUSURA RISORSE
            if (conn != null) {
                try {
                    conn.setAutoCommit(true); // Ripristino per best practice
                    conn.close();
                } catch (SQLException ex) {
                    System.err.println("Errore durante la chiusura della connessione: " + ex.getMessage());
                }
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Endpoint supporta solo POST.");
    }

    // ── Utility ───────────────────────────────────────────────────────────────

    private String getStringSafe(JsonObject json, String key) {
        try {
            return json.has(key) && !json.get(key).isJsonNull()
                ? json.get(key).getAsString().trim() : null;
        } catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}