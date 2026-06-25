package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
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
 * API ENDPOINT : /assegnaTesseraServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Assegna una tessera a un dipendente. Aggiorna la sede e il tipo tessera,
 * e registra l'assegnazione verificando che non ci siano sovrapposizioni di date.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "codiceFiscale": "stringa",            // (Obbligatorio) CF del dipendente
 * "idTessera": "stringa",                // (Obbligatorio) Identificativo della tessera
 * "sede": "stringa",                     // (Obbligatorio) Sede da aggiornare sulla tessera
 * "codTipoTessera": "D" | "S",           // (Obbligatorio) 'D' (dipendente) o 'S' (sostitutiva)
 * "dataInizioAssegnazione": "stringa",   // (Obbligatorio) Formato: dd/MM/yyyy HH:mm:ss (es. 30/05/2026 23:00:00)
 * "dataFineAssegnazione": "stringa"      // (Obbligatorio) Formato: dd/MM/yyyy HH:mm:ss
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessera assegnata correttamente.",
 * "data": null
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request) : Body vuoto o JSON non valido, parametri obbligatori mancanti, 
 * codTipoTessera non valido (diverso da D/S), formato date errato, 
 * data inizio successiva a data fine.
 * - HTTP 404 (Not Found)   : Codice fiscale non trovato a sistema, Tessera inesistente.
 * - HTTP 405 (Not Allowed) : L'endpoint è stato richiamato in GET invece che in POST.
 * - HTTP 409 (Conflict)    : La tessera risulta già assegnata nel periodo selezionato.
 * - HTTP 500 (Server Error): Configurazione DB mancante, errori in aggiornamento DB o salvataggio.
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/assegnaTesseraServlet")
public class AssegnaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Formato date atteso dal frontend: "30/05/2026 23:00:00"
    private static final DateTimeFormatter DATE_FORMATTER =
        DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[assegnaTesseraServlet] >>> Inizio doPost");

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();
        System.out.println("[assegnaTesseraServlet] Body ricevuto: " + bodyJson);

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

        // ── 3. Estrai e Normalizza i campi (Mettiamo tutto in UPPERCASE per sicurezza) ──
        String codFiscale     = getStringSafe(json, "codiceFiscale") != null ? getStringSafe(json, "codiceFiscale").toUpperCase() : null;
        String idTessera      = getStringSafe(json, "idTessera") != null ? getStringSafe(json, "idTessera").toUpperCase() : null;
        String sede           = getStringSafe(json, "sede") != null ? getStringSafe(json, "sede").toUpperCase() : null;
        String codTipoTessera = getStringSafe(json, "codTipoTessera") != null ? getStringSafe(json, "codTipoTessera").toUpperCase() : null;
        String dataInizioStr  = getStringSafe(json, "dataInizioAssegnazione");
        String dataFineStr    = getStringSafe(json, "dataFineAssegnazione");

        // ── 4. VALIDAZIONI MANIACALI (Prima di toccare il DB) ──
        if (isBlank(codFiscale) || isBlank(idTessera) || isBlank(sede) || isBlank(codTipoTessera) || isBlank(dataInizioStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }

        // A. Controlli schema DB (Lunghezze)
        if (idTessera.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera supera i 10 caratteri consentiti.");
            return;
        }
        if (sede.length() > 7) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Sede supera i caratteri consentiti.");
            return;
        }
        if (codTipoTessera.length() != 1 || (!codTipoTessera.equals("D") && !codTipoTessera.equals("S"))) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Tipo Tessera non valido. Atteso 'D' o 'S'.");
            return;
        }

        // B. Controlli Formali (Regex Codice Fiscale)
        if (codFiscale.length() != 16 || !codFiscale.matches("^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato Codice Fiscale non valido.");
            return;
        }

        // C. Logica Date
        LocalDateTime dataInizio = parseDate(dataInizioStr);
        LocalDateTime dataFine   = parseDate(dataFineStr);
        
        // Gestione Default Data Fine se mancante (Dipende dalle tue regole di business)
        if (dataFine == null) {
            dataFine = LocalDateTime.of(9999, 12, 31, 23, 59, 59); // Data fittizia "infinito"
        }
        
        if(dataFine.isBefore(dataInizio)){
        	ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Data fine assegnazione non può essere antecedente alla data di inizio");
        }

        if (dataInizio == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data inizio non valido.");
            return;
        }

        // Non permettere che Inizio sia uguale o maggiore alla Fine
        if (!dataInizio.isBefore(dataFine)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "La data di inizio deve essere rigorosamente precedente alla data di fine.");
            return;
        }

        // ── 5. CONNESSIONE E TRANSAZIONE ──
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            props.load(is);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
            return;
        }

        Connection conn = null;
        try {
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // DISABILITIAMO AUTOCOMMIT: Inizia la Transazione!
            conn.setAutoCommit(false);

            // Inizializziamo i DAO passandogli LA STESSA connessione
            AnagraficaCodFiscale1DAO daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(conn);
            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO daoAssegnaz = new TesseraDipend1DAOJDBCImpl(conn);

            // --- VERIFICHE DI BUSINESS CON DATABASE ---

            // 1. Esiste l'anagrafica?
            if (daoAnagrafica.getByCodFiscale(codFiscale) == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Codice Fiscale non trovato a sistema.");
                return;
            }

            // 2. Lock della Tessera (Race Condition Prevention)
            Tessera tessera = daoTessera.getTesseraByIdForUpdate(idTessera);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente.");
                return;
            }

            // 3. Controllo Indisponibilità Tessera
            if (tessera.getDataOraIndisponibilita() != null && tessera.getDataOraIndisponibilita().isBefore(LocalDateTime.now())) {
                 ResponseUtil.sendError(response, HttpServletResponse.SC_FORBIDDEN, "Impossibile assegnare: la tessera risulta invalidata o indisponibile.");
                 return;
            }

            // 4. Verifica Sovrapposizioni (Usiamo >= e <= per evitare anche l'adiacenza esatta al secondo se richiesto, altrimenti tieni il tuo check)
            List<TesseraDipend> assegnazioniTessera = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend ass : assegnazioniTessera) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "La tessera risulta già assegnata nel periodo selezionato.");
                    return;
                }
            }

            List<TesseraDipend> assegnazioniDipendente = daoAssegnaz.getAssegnazioniByDipendente(codFiscale);
            for (TesseraDipend ass : assegnazioniDipendente) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "Il dipendente possiede già una tessera attiva nel periodo selezionato.");
                    return;
                }
            }

            // --- ESECUZIONE AGGIORNAMENTI (Tutto o Niente) ---
            
            // Puoi usare il metodo unificato che hai già per ottimizzare la query!
            boolean tesseraAggiornata = daoTessera.updateSedeECodTipo(idTessera, sede, codTipoTessera);
            if (!tesseraAggiornata) {
                throw new SQLException("Errore aggiornamento dati tessera.");
            }

            TesseraDipend nuovaAssegnazione = new TesseraDipend(idTessera, codFiscale, dataInizio, dataFine);
            boolean assegnazioneInserita = daoAssegnaz.insertAssegnazione(nuovaAssegnazione);
            if (!assegnazioneInserita) {
                throw new SQLException("Errore inserimento in tesseradipend.");
            }

            // SE ARRIVIAMO QUI, È ANDATO TUTTO BENE: CONFERMIAMO!
            conn.commit();
            ResponseUtil.sendOkNoData(response, "Tessera assegnata correttamente.");

        } catch (Exception e) {
            // IN CASO DI ERRORE, ANNULLIAMO TUTTE LE MODIFICHE DELLA TRANSAZIONE
            System.err.println("[assegnaTesseraServlet] Rollback in corso per errore: " + e.getMessage());
            if (conn != null) {
                try { conn.rollback(); } catch (SQLException ex) { ex.printStackTrace(); }
            }
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno, operazione annullata: " + e.getMessage());
        } finally {
            // CHIUDIAMO LA CONNESSIONE QUI, UNA VOLTA SOLA
            if (conn != null) {
                try { 
                    conn.setAutoCommit(true); // Buona norma ripristinarlo prima di chiudere
                    conn.close(); 
                } catch (SQLException ex) { ex.printStackTrace(); }
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Endpoint supporta solo POST.");
    }

    // ── Utility ───────────────────────────────────────────────────────────────

    private LocalDateTime parseDate(String dateStr) {
        try {
            return LocalDateTime.parse(dateStr.trim(), DATE_FORMATTER);
        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Errore parsing data: " + dateStr);
            return null;
        }
    }

    private String getStringSafe(JsonObject json, String key) {
        try {
            return json.has(key) && !json.get(key).isJsonNull()
                ? json.get(key).getAsString() : null;
        } catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}