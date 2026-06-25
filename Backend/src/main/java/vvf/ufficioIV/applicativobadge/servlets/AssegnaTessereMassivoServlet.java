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

import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAO;
import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAOJDBCImpl;
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
 * API ENDPOINT : /assegnaTessereMassivo
 * METODO HTTP  : POST
 * DESCRIZIONE  : Prende in carico una lista di accoppiamenti CF-Tessera e li assegna in modo
 *                massivo e atomico, forzando il tipo tessera a 'D' (Dipendente).
 * ==========================================================================================
 */
@WebServlet("/assegnaTessereMassivo")
public class AssegnaTessereMassivoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        System.out.println("[AssegnaTessereMassivoServlet] >>> Inizio elaborazione massiva");

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

     // ── 2. Estrazione e Validazione Globale ────────────────────────────────
        if (!json.has("tessere") || !json.get("tessere").isJsonArray()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'tessere' mancante o non è un array.");
            return;
        }
        JsonArray tessereArray = json.getAsJsonArray("tessere");
        
        if (tessereArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'array 'tessere' è vuoto.");
            return;
        }

        String sedeGlobale = getStringSafe(json, "sede");
        String dataInizioStr = getStringSafe(json, "dataInizioAssegnazione");
        String dataFineStr   = getStringSafe(json, "dataFineAssegnazione");

        if (isBlank(sedeGlobale) || isBlank(dataInizioStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri 'sede' e 'dataInizioAssegnazione' obbligatori mancanti.");
            return;
        }
        
        if (sedeGlobale.length() > 7) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Codice Sede supera i 7 caratteri consentiti.");
            return;
        }

        LocalDateTime dataInizio = parseDate(dataInizioStr);
        LocalDateTime dataFine   = parseDate(dataFineStr);

        if (dataInizio == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data inizio non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        // Default infinito se manca la data di fine
        if (dataFine == null) {
            dataFine = LocalDateTime.of(9999, 12, 31, 23, 59, 59);
        }

        if (!dataInizio.isBefore(dataFine)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "La data di inizio assegnazione deve essere precedente alla data di fine.");
            return;
        }

        // ── 3. Pre-Validazione Formale dell'Array (Fail-Fast) ──────────────────
        for (JsonElement el : tessereArray) {
            JsonObject item = el.getAsJsonObject();
            String cf = getStringSafe(item, "cf");
            String idT = getStringSafe(item, "idTessera");

            if (isBlank(cf) || isBlank(idT)) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "In ogni oggetto dell'array i campi 'cf' e 'idTessera' sono obbligatori.");
                return;
            }
            if (cf.length() != 16 || !cf.toUpperCase().matches("^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$")) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato Codice Fiscale non valido per: " + cf);
                return;
            }
            if (idT.length() > 10) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera supera i 10 caratteri consentiti per la tessera: " + idT);
                return;
            }
        }

        // ── 4. Connessione DB e Inizio Transazione ─────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
            return;
        }

        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // DISABILITA AUTOCOMMIT: Atomicità garantita
            conn.setAutoCommit(false);

            AnagraficaCodFiscale1DAO daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(conn);
            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO daoAssegnaz = new TesseraDipend1DAOJDBCImpl(conn);

            int contatoreAssegnazioni = 0;

            // ── 5. Ciclo di Business Logic ─────────────────────────────────────
            
            String sedeUpperCase = sedeGlobale.toUpperCase();
            
            for (JsonElement el : tessereArray) {
                JsonObject item = el.getAsJsonObject();
                String cf = getStringSafe(item, "cf").toUpperCase();
                String idTessera = getStringSafe(item, "idTessera").toUpperCase();
                //OLD String sede = getStringSafe(item, "sede").toUpperCase();
                
                // Forza il tipo tessera a Dipendente come da requisito
                String codTipoTesseraForzato = "D";

                // Controllo 1: Anagrafica
                if (daoAnagrafica.getByCodFiscale(cf) == null) {
                    throw new IllegalArgumentException("Operazione bloccata. Codice Fiscale non censito a sistema: " + cf);
                }

                // Controllo 2: Lock Pessimistico ed Esistenza Tessera
                Tessera tessera = daoTessera.getTesseraByIdForUpdate(idTessera);
                if (tessera == null) {
                    throw new IllegalArgumentException("Operazione bloccata. Tessera non trovata a sistema: " + idTessera);
                }

                // Controllo 3: Stato di validità della tessera fisica
                if (tessera.getDataOraIndisponibilita() != null && tessera.getDataOraIndisponibilita().isBefore(LocalDateTime.now())) {
                    throw new IllegalArgumentException("Operazione bloccata per il CF " + cf + ". La tessera " + idTessera + " risulta smarrita o indisponibile.");
                }

                // Controllo 4: Sovrapposizioni (Stessa tessera a più persone nel periodo)
                List<TesseraDipend> assegnazioniTessera = daoAssegnaz.getAssegnazioniByTessera(idTessera);
                for (TesseraDipend ass : assegnazioniTessera) {
                    if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                        throw new IllegalArgumentException("Sovrapposizione rilevata: La tessera " + idTessera + " risulta già assegnata nel periodo indicato.");
                    }
                }

                // Controllo 5: Sovrapposizioni (Stessa persona con più tessere nel periodo)
                List<TesseraDipend> assegnazioniDipendente = daoAssegnaz.getAssegnazioniByDipendente(cf);
                for (TesseraDipend ass : assegnazioniDipendente) {
                    if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                        throw new IllegalArgumentException("Sovrapposizione rilevata: Il dipendente " + cf + " possiede già un'assegnazione attiva nel periodo indicato.");
                    }
                }

                // ── Esecuzione Aggiornamenti ──
                boolean tesseraAggiornata = daoTessera.updateSedeECodTipo(idTessera, sedeUpperCase, codTipoTesseraForzato);
                if (!tesseraAggiornata) {
                    throw new SQLException("Errore fatale in aggiornamento anagrafica per la tessera: " + idTessera);
                }

                TesseraDipend nuovaAssegnazione = new TesseraDipend(idTessera, cf, dataInizio, dataFine);
                boolean assegnazioneInserita = daoAssegnaz.insertAssegnazione(nuovaAssegnazione);
                if (!assegnazioneInserita) {
                    throw new SQLException("Errore fatale in registrazione assegnazione per CF: " + cf);
                }
                
                contatoreAssegnazioni++;
            }

            // ── 6. Conferma Transazione ────────────────────────────────────────
            conn.commit();
            System.out.println("[AssegnaTessereMassivoServlet] <<< Assegnazione di " + contatoreAssegnazioni + " tessere completata con successo.");
            ResponseUtil.sendOkNoData(response, "Assegnazione massiva completata con successo (" + contatoreAssegnazioni + " tessere assegnate).");

        } catch (IllegalArgumentException e) {
            // Errori di logica previsti -> HTTP 400 (Bad Request) o 409 (Conflict) in base a come lo gestisce il FE
            System.err.println("[AssegnaTessereMassivoServlet] Blocco validazione: " + e.getMessage());
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
            
        } catch (Exception e) {
            // Errori imprevisti o SQL -> HTTP 500
            System.err.println("[AssegnaTessereMassivoServlet] Errore di sistema, esecuzione Rollback: " + e.getMessage());
            e.printStackTrace();
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il salvataggio: " + e.getMessage());
            
        } finally {
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

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste POST.");
    }

    // --- Metodi di utilità locali ---
    
    private void eseguiRollback(Connection conn) {
        if (conn != null) {
            try { conn.rollback(); } 
            catch (SQLException ex) { System.err.println("Errore durante il rollback: " + ex.getMessage()); }
        }
    }

    private LocalDateTime parseDate(String dateStr) {
        try { return LocalDateTime.parse(dateStr.trim(), DATE_FORMATTER); } 
        catch (Exception e) { return null; }
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