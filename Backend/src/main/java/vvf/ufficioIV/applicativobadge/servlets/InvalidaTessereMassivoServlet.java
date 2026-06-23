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

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDipend1;
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
 * API ENDPOINT : /invalidaTessereMassivo
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Invalida una lista di tessere e revoca a cascata le eventuali 
 * assegnazioni attualmente in corso, utilizzando la data/ora fornita.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "idTessere": ["123", "456", "789"],
 * "dataOraIndisponibilita": "04/06/2026 15:30:00"
 * }
 * ==========================================================================================
 */
@WebServlet("/invalidaTessereMassivo")
public class InvalidaTessereMassivoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[InvalidaTessereMassivoServlet] >>> Inizio elaborazione massiva");

        // ── 1. Estrazione e Parsing JSON Body ──────────────────────────────────
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

        // Verifica la presenza dell'array idTessere
        if (!json.has("idTessere") || !json.get("idTessere").isJsonArray()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'idTessere' mancante o non è un array valido.");
            return;
        }
        JsonArray idTessereArray = json.getAsJsonArray("idTessere");
        
        if (idTessereArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'array 'idTessere' è vuoto.");
            return;
        }

        // Verifica data
        String dataIndispStr = getStringSafe(json, "dataOraIndisponibilita");
        if (isBlank(dataIndispStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'dataOraIndisponibilita' mancante.");
            return;
        }

        LocalDateTime dataIndisp;
        try {
            dataIndisp = LocalDateTime.parse(dataIndispStr, formatter);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        // ── 2. Caricamento DB Config ───────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config: file di configurazione non trovato.");
            return;
        }

        // ── 3. GESTIONE TRANSAZIONALE ──────────────────────────────────────────
        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // DISABILITA AUTOCOMMIT: Inizio Transazione All-or-Nothing
            conn.setAutoCommit(false);

            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO daoAssegnaz = new TesseraDipend1DAOJDBCImpl(conn);

            int contatoreInvalidate = 0;
            int contatoreAccorciate = 0;

            // ── 4. CICLO SULLA LISTA DELLE TESSERE ─────────────────────────────
            for (JsonElement element : idTessereArray) {
                String idTessera = element.getAsString().trim().toUpperCase();

                if (idTessera.length() > 10) {
                    throw new IllegalArgumentException("L'ID Tessera '" + idTessera + "' supera i 10 caratteri consentiti.");
                }

                // A. LOCK DELLA SINGOLA TESSERA
                Tessera1 tessera = daoTessera.getTesseraByIdForUpdate(idTessera);
                if (tessera == null) {
                    throw new IllegalArgumentException("Tessera non trovata nel sistema: " + idTessera);
                }

                // B. REGOLA A: PROTEZIONE PARADOSSI TEMPORALI
                List<TesseraDipend1> assegnazioni = daoAssegnaz.getAssegnazioniByTessera(idTessera);
                for (TesseraDipend1 ass : assegnazioni) {
                    if (ass.getDataOraFineAssegnazione().isAfter(LocalDateTime.now())) {
                        if (dataIndisp.isBefore(ass.getDataOraInizioAssegnazione())) {
                            throw new IllegalArgumentException("Paradosso temporale sulla tessera " + idTessera + ": la data di invalidazione è antecedente all'inizio dell'assegnazione corrente.");
                        }
                    }
                }

                // C. INVALIDAZIONE FISICA DELLA TESSERA
                boolean invalidata = daoTessera.invalidaTessera(idTessera, dataIndisp);
                if (!invalidata) {
                    throw new SQLException("Impossibile aggiornare la riga su TESSERA1 per l'ID: " + idTessera);
                }
                contatoreInvalidate++;

                // D. REGOLA C: REVOCA/ACCORCIAMENTO ASSEGNAZIONI ATTIVE
                boolean assegnazioneAccorciata = daoAssegnaz.revocaAssegnazioneAttiva(idTessera, dataIndisp);
                if (assegnazioneAccorciata) {
                    contatoreAccorciate++;
                }
            }

            // COMMIT: Conferma tutte le modifiche per tutte le tessere
            conn.commit();
            
            // Creazione risposta dinamica
            String messaggioSuccesso = "Operazione massiva completata. Tessere invalidate: " + contatoreInvalidate + ".";
            if (contatoreAccorciate > 0) {
                messaggioSuccesso += " Attenzione: " + contatoreAccorciate + " assegnazioni in corso sono state anticipate alla data di indisponibilità.";
            }

            ResponseUtil.sendOkNoData(response, messaggioSuccesso);
            System.out.println("[InvalidaTessereMassivoServlet] <<< Completato con successo");

        } catch (IllegalArgumentException ie) {
            // Errori di logica di business (paradosso temporale, tessera non trovata) -> RESTITUISCE 400
            System.err.println("[InvalidaTessereMassivoServlet] Validazione fallita. Esecuzione Rollback: " + ie.getMessage());
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, ie.getMessage());
        } catch (Exception e) {
            // Errori SQL o eccezioni impreviste -> RESTITUISCE 500
            System.err.println("[InvalidaTessereMassivoServlet] Errore critico. Esecuzione Rollback: " + e.getMessage());
            e.printStackTrace();
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il processo massivo: " + e.getMessage());
        } finally {
            // CHIUSURA CONNESSIONE UNICA
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
    
    private void eseguiRollback(Connection conn) {
        if (conn != null) {
            try {
                conn.rollback();
            } catch (SQLException ex) {
                System.err.println("Errore fatale durante il rollback: " + ex.getMessage());
            }
        }
    }

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