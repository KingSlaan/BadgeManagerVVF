package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera;
import vvf.ufficioIV.applicativobadge.entity.TesseraDipend;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /invalidaTessera/{idTessera}
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Invalida una specifica tessera e revoca a cascata l'eventuale 
 * assegnazione attualmente in corso, utilizzando la data/ora fornita.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * URL Path     : idTessera deve essere accodato all'URL (es. /invalidaTessera/123)
 * Body         :
 * {
 * "dataOraIndisponibilita": "dd/MM/yyyy HH:mm:ss"  // Es: "04/06/2026 15:30:00" (obbligatorio)
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessera invalidata e relativa assegnazione revocata con successo.",
 * "data": null
 * }
 * * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 404, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "ID Tessera mancante nell'URL."
 * - HTTP 400 : "Body JSON non valido."
 * - HTTP 400 : "Parametro dataOraIndisponibilita mancante."
 * - HTTP 400 : "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss)."
 * - HTTP 404 : "Tessera non trovata."
 * - HTTP 500 : "Errore DB Config" oppure "Errore interno: <dettaglio_errore>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/invalidaTessera/*")
public class InvalidaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[InvalidaTesseraServlet] >>> Inizio doPut (Transazionale)");

        // ── 1. Estrazione e Validazione Path Param ─────────────────────────────
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTesseraUrl = pathInfo.substring(1).trim().toUpperCase();

        if (idTesseraUrl.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'ID Tessera nell'URL supera i 10 caratteri consentiti.");
            return;
        }

        // ── 2. Estrazione e Parsing JSON Body ──────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }

        JsonObject json;
        try {
            json = JsonParser.parseString(sb.toString()).getAsJsonObject();
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        String dataIndispStr = getStringSafe(json, "dataOraIndisponibilita");

        if (isBlank(dataIndispStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro dataOraIndisponibilita mancante.");
            return;
        }

        LocalDateTime dataIndisp;
        try {
            dataIndisp = LocalDateTime.parse(dataIndispStr, formatter);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        // ── 3. Caricamento DB Config ───────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config: file di configurazione non trovato.");
            return;
        }

        // ── 4. GESTIONE TRANSAZIONALE ──────────────────────────────────────────
        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            //  DISABILITA AUTOCOMMIT: Inizio Transazione
            conn.setAutoCommit(false);

            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO daoAssegnaz = new TesseraDipend1DAOJDBCImpl(conn);

            // A. LOCK DELLA TESSERA (Pessimistic Lock per prevenire assegnazioni simultanee)
            Tessera tessera = daoTessera.getTesseraByIdForUpdate(idTesseraUrl);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera non trovata.");
                return;
            }

            
            /* B. VERIFICA STATO TESSERA
            if (tessera.getDataOraIndisponibilita() != null && !tessera.getDataOraIndisponibilita().isAfter(LocalDateTime.now())) {
                // La tessera ha già una data di indisponibilità nel passato o presente
                ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "La tessera risulta già invalidata a sistema.");
                return;
            }
            */

            // C. PROTEZIONE PARADOSSI TEMPORALI SULLE ASSEGNAZIONI
            // Verifichiamo che la data di invalidazione non sia precedente all'inizio dell'assegnazione corrente
            List<TesseraDipend> assegnazioni = daoAssegnaz.getAssegnazioniByTessera(idTesseraUrl);
            for (TesseraDipend ass : assegnazioni) {
                // Troviamo l'assegnazione attualmente attiva (che finisce nel futuro)
                if (ass.getDataOraFineAssegnazione().isAfter(LocalDateTime.now())) {
                    if (dataIndisp.isBefore(ass.getDataOraInizioAssegnazione())) {
                        ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, 
                            "La data di invalidazione non può essere antecedente all'inizio dell'assegnazione corrente (" 
                            + ass.getDataOraInizioAssegnazione().format(formatter) + ").");
                        return;
                    }
                }
            }

            // ── 5. ESECUZIONE AGGIORNAMENTI A CASCATA ──────────────────────────
            
            // Step 1: Invalida la tessera fisica
            boolean invalidata = daoTessera.invalidaTessera(idTesseraUrl, dataIndisp);
            if (!invalidata) {
                throw new SQLException("Impossibile aggiornare la riga su tessera.");
            }

            // Step 2: Revoca assegnazioni attive
            // Catturiamo il boolean: se è true, significa che l'assegnazione in corso 
            // aveva una fine "nel futuro" ed è stata anticipata alla data di indisponibilità (REGOLA C)
            boolean assegnazioneAccorciata = daoAssegnaz.revocaAssegnazioneAttiva(idTesseraUrl, dataIndisp);

            //  COMMIT: Conferma tutte le modifiche
            conn.commit();
            
            // ---> INIZIO MODIFICA: REGOLA DI BUSINESS (C) - Risposta Dinamica <---
            if (assegnazioneAccorciata) {
                ResponseUtil.sendOkNoData(response, "Tessera invalidata con successo. Attenzione: la data di fine dell'assegnazione in corso è stata anticipata alla data di indisponibilità.");
            } else {
                ResponseUtil.sendOkNoData(response, "Tessera invalidata con successo. Nessuna assegnazione attiva ha subito variazioni.");
            }
            // ---> FINE MODIFICA <---
            
            System.out.println("[InvalidaTesseraServlet] <<< Completato con successo");

        } catch (Exception e) {
            // ❌ ROLLBACK: Ripristina il DB in caso di fallimento
            System.err.println("[InvalidaTesseraServlet] Errore critico. Esecuzione Rollback: " + e.getMessage());
            e.printStackTrace();
            if (conn != null) {
                try {
                    conn.rollback();
                } catch (SQLException ex) {
                    System.err.println("Errore fatale durante il rollback: " + ex.getMessage());
                }
            }
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il processo di invalidazione: " + e.getMessage());
        } finally {
            //  CHIUSURA CONNESSIONE UNICA
            if (conn != null) {
                try {
                    conn.setAutoCommit(true);
                    conn.close();
                } catch (SQLException ex) {
                    System.err.println("Errore in chiusura connessione: " + ex.getMessage());
                }
            }
        }
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