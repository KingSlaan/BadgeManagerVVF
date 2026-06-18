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
import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale1;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDipend1;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
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

        // ── 3. Estrai campi dal frontend ──────────────────────────────────────
        String codFiscale     = getStringSafe(json, "codiceFiscale");
        String idTessera      = getStringSafe(json, "idTessera");
        String sede           = getStringSafe(json, "sede");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");
        String dataInizioStr  = getStringSafe(json, "dataInizioAssegnazione");
        String dataFineStr    = getStringSafe(json, "dataFineAssegnazione");

        System.out.println("[assegnaTesseraServlet] Parametri ricevuti:");
        System.out.println("  codiceFiscale          = " + codFiscale);
        System.out.println("  idTessera              = " + idTessera);
        System.out.println("  sede                   = " + sede);
        System.out.println("  codTipoTessera         = " + codTipoTessera);
        System.out.println("  dataInizioAssegnazione = " + dataInizioStr);
        System.out.println("  dataFineAssegnazione   = " + dataFineStr);

        // ── 4. Validazione obbligatori ────────────────────────────────────────
        if (isBlank(codFiscale) || isBlank(idTessera) || isBlank(sede) ||
            isBlank(codTipoTessera) || isBlank(dataInizioStr) || isBlank(dataFineStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }

        // ── 5. Validazione codTipoTessera ('D' o 'S') ────────────────────────
        String codTipoTesseraUpper = codTipoTessera.toUpperCase();
        if (!codTipoTesseraUpper.equals("D") && !codTipoTesseraUpper.equals("S")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
                "Valore codTipoTessera non valido: deve essere 'D' (dipendente) o 'S' (sostitutiva).");
            return;
        }

        // ── 6. Parsing date (formato: dd/MM/yyyy HH:mm:ss) ───────────────────
        LocalDateTime dataInizio = parseDate(dataInizioStr);
        LocalDateTime dataFine   = parseDate(dataFineStr);

        if (dataInizio == null || dataFine == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
                "Formato date non valido. Atteso: dd/MM/yyyy HH:mm:ss (es. 30/05/2026 23:00:00).");
            return;
        }

        if (dataInizio.isAfter(dataFine)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
                "La data di inizio non può essere successiva alla data di fine.");
            return;
        }

        // ── 7. Carica config DB ───────────────────────────────────────────────
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
                return;
            }
            props.load(is);
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        AnagraficaCodFiscale1DAO daoAnagrafica = null;
        Tessera1DAO              daoTessera    = null;
        TesseraDipend1DAO        daoAssegnaz   = null;

        try {
            daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(ip, port, db, user, pwd);
            daoTessera    = new Tessera1DAOJDBCImpl(ip, port, db, user, pwd);
            daoAssegnaz   = new TesseraDipend1DAOJDBCImpl(ip, port, db, user, pwd);

            // VERIFICA 1: Il codice fiscale esiste in anagrafica?
            System.out.println("[assegnaTesseraServlet] Verifica codice fiscale...");
            AnagraficaCodFiscale1 anagrafica = daoAnagrafica.getByCodFiscale(codFiscale);
            if (anagrafica == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Codice fiscale non trovato a sistema.");
                return;
            }
            System.out.println("[assegnaTesseraServlet] Codice fiscale OK: " + anagrafica.getCognome() + " " + anagrafica.getNome());

            // VERIFICA 2: La tessera esiste?
            System.out.println("[assegnaTesseraServlet] Verifica tessera...");
            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente.");
                return;
            }
            System.out.println("[assegnaTesseraServlet] Tessera trovata: " + idTessera);

            // VERIFICA 3: Sovrapposizione di assegnazione
            System.out.println("[assegnaTesseraServlet] Verifica sovrapposizione assegnazioni...");
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 assEsistente : assegnazioniEsistenti) {
                LocalDateTime startEsistente = assEsistente.getDataOraInizioAssegnazione();
                LocalDateTime endEsistente   = assEsistente.getDataOraFineAssegnazione();
                if (dataInizio.isBefore(endEsistente) && dataFine.isAfter(startEsistente)) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT,
                        "La tessera risulta già assegnata nel periodo selezionato.");
                    return;
                }
            }
            
            // VERIFICA 4: Sovrapposizione assegnazione per il DIPENDENTE (Nuovo controllo)
            System.out.println("[assegnaTesseraServlet] Verifica sovrapposizione tessere per il dipendente...");
            List<TesseraDipend1> assegnazioniDipendente = daoAssegnaz.getAssegnazioniByDipendente(codFiscale);
            for (TesseraDipend1 assEsistente : assegnazioniDipendente) {
                LocalDateTime startEsistente = assEsistente.getDataOraInizioAssegnazione();
                LocalDateTime endEsistente   = assEsistente.getDataOraFineAssegnazione();
                
                // Se c'è sovrapposizione temporale
                if (dataInizio.isBefore(endEsistente) && dataFine.isAfter(startEsistente)) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT,
                        "Il dipendente possiede già una tessera attiva nel periodo temporale selezionato.");
                    return;
                }
            }
            
            System.out.println("[assegnaTesseraServlet] Nessuna sovrapposizione rilevata.");

            // AZIONE 1: Aggiorna sede su TESSERA1
            System.out.println("[assegnaTesseraServlet] Aggiornamento sede...");
            boolean sedeAggiornata = daoTessera.updateSede(idTessera, sede);
            if (!sedeAggiornata) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Errore durante l'aggiornamento della sede.");
                return;
            }
            System.out.println("[assegnaTesseraServlet] Sede aggiornata OK.");

            // AZIONE 2: Aggiorna codTipoTessera su TESSERA1
            System.out.println("[assegnaTesseraServlet] Aggiornamento codTipoTessera...");
            boolean tipoAggiornato = daoTessera.updateCodTipoTessera(idTessera, codTipoTesseraUpper);
            if (!tipoAggiornato) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Errore durante l'aggiornamento del tipo tessera.");
                return;
            }
            System.out.println("[assegnaTesseraServlet] CodTipoTessera aggiornato OK.");

            // AZIONE 3: Inserisci assegnazione in TESSERADIPEND1
            System.out.println("[assegnaTesseraServlet] Inserimento assegnazione...");
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTessera, codFiscale, dataInizio, dataFine);
            boolean inserita = daoAssegnaz.insertAssegnazione(nuovaAssegnazione);
            if (!inserita) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Errore durante il salvataggio dell'assegnazione.");
                return;
            }
            System.out.println("[assegnaTesseraServlet] Assegnazione inserita OK.");

            // Nessun dato da restituire: operazione di scrittura → data: null
            ResponseUtil.sendOkNoData(response, "Tessera assegnata correttamente.");
            System.out.println("[assegnaTesseraServlet] >>> Fine doPost con successo.");

        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                "Errore interno del server: " + e.getMessage());
        } finally {
            if (daoAnagrafica != null) daoAnagrafica.closeConnection();
            if (daoTessera != null)    daoTessera.closeConnection();
            if (daoAssegnaz != null)   daoAssegnaz.closeConnection();
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