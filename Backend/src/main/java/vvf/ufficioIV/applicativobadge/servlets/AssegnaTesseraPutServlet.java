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
 * API ENDPOINT : /assegnaTessera/{idTessera}
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Assegna una tessera specifica a un dipendente (tramite Codice Fiscale) 
 * per un determinato periodo temporale. Verifica l'esistenza dell'anagrafica,
 * della tessera e previene sovrapposizioni temporali di assegnazione.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Path Param   : {idTessera} - ID della tessera da passare nell'URL (es. /assegnaTessera/0000090801)
 * Body         :
 * {
 * "codiceFiscale": "MRORSS80A01H501Z",           // (Obbligatorio) Codice fiscale del dipendente
 * "codTipoTessera": "s",                         // (Obbligatorio) Valori ammessi: "s" oppure "d"
 * "dataOraInizioAssegnazione": "04/06/2026 08:00:00", // (Obbligatorio) Formato: dd/MM/yyyy HH:mm:ss
 * "dataOraFineAssegnazione": "04/06/2026 18:00:00"    // (Obbligatorio) Formato: dd/MM/yyyy HH:mm:ss
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
 * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 403, 404, 409, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request) : "ID Tessera mancante nell'URL."
 * "Body JSON non valido."
 * "Parametri obbligatori mancanti."
 * "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss)."
 * - HTTP 403 (Forbidden)   : "Tipo tessera non assegnabile." (Se codTipoTessera non è 's' o 'd')
 * - HTTP 404 (Not Found)   : "Codice Fiscale non trovato."
 * "Tessera inesistente."
 * - HTTP 409 (Conflict)    : "La tessera risulta già assegnata nel periodo selezionato."
 * - HTTP 500 (Server Error): "Configurazione DB non trovata."
 * "Errore salvataggio assegnazione."
 * "Errore interno: <dettaglio_eccezione>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore indicata sopra>"
 * }
 * ==========================================================================================
 */
@WebServlet("/assegnaTessera/*")
public class AssegnaTesseraPutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[AssegnaTesseraPutServlet] >>> Inizio doPut (Transazionale)");

        // ── 1. Estrai e valida ID dal Path ─────────────────────────────────────
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTesseraUrl = pathInfo.substring(1).trim().toUpperCase();

        if (idTesseraUrl.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'ID Tessera nell'URL supera i 10 caratteri.");
            return;
        }

        // ── 2. Leggi e Parsa Body JSON ─────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        
        JsonObject json;
        try {
            json = JsonParser.parseString(sb.toString()).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        // ── 3. Estrai e Normalizza i Parametri (Tutto UPPERCASE) ───────────────
        String codFiscale     = getStringSafe(json, "codiceFiscale");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");
        String dataInizioStr  = getStringSafe(json, "dataOraInizioAssegnazione");
        String dataFineStr    = getStringSafe(json, "dataOraFineAssegnazione");

        if (codFiscale != null) codFiscale = codFiscale.toUpperCase();
        if (codTipoTessera != null) codTipoTessera = codTipoTessera.toUpperCase();

     // ── 4. VALIDAZIONI MANIACALI PRE-DATABASE ────────────────────────────────

     // 1. Campi assolutamente obbligatori dal Frontend
     // Se manca CF, Tipo Tessera o Data Inizio, l'operazione non ha senso.
     if (isBlank(codFiscale) || isBlank(codTipoTessera) || isBlank(dataInizioStr)) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti: codiceFiscale, codTipoTessera e dataInizioAssegnazione sono richiesti.");
         return;
     }

     // 2. Validazione Strutturale ID Tessera (Dal Path)
     // Dai dati DB sappiamo che l'ID è rigorosamente di 10 cifre (zero-padded).
     if (!idTesseraUrl.matches("^[0-9]{10}$")) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato ID Tessera non valido. Deve essere composto da esattamente 10 cifre numeriche (es. 0000001234).");
         return;
     }

     // 3. Validazione Strutturale Codice Fiscale
     if (codFiscale.length() != 16 || !codFiscale.matches("^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$")) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato Codice Fiscale non valido.");
         return;
     }

     // 4. Validazione Dominio Tipo Tessera
     if (!codTipoTessera.equals("S") && !codTipoTessera.equals("D")) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_FORBIDDEN, "Tipo tessera non valido. Valori ammessi nel DB: 'S' o 'D'.");
         return;
     }

     // 5. Logica Date e Gestione "Infinito" (9999)
     LocalDateTime dataInizio;
     LocalDateTime dataFine;

     try {
         dataInizio = LocalDateTime.parse(dataInizioStr, formatter);
         
         // Se il FE non mi passa la data di fine (assegnazione a tempo indeterminato),
         // forziamo lo standard di DB visto dai log: 31/12/9999 23:59:00
         if (isBlank(dataFineStr)) {
             dataFine = LocalDateTime.of(9999, 12, 31, 23, 59, 00);
         } else {
             dataFine = LocalDateTime.parse(dataFineStr, formatter);
         }
     } catch (Exception e) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido. Utilizzare il formato dd/MM/yyyy HH:mm:ss.");
         return;
     }

     // 6. Coerenza Temporale Logica
     if (!dataInizio.isBefore(dataFine)) {
         ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "La data di inizio assegnazione deve essere precedente alla data di fine.");
         return;
     }

        // ── 5. CARICAMENTO PROPRIETÀ DB ────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
            return;
        }

        // ── 6. GESTIONE TRANSAZIONALE (Tutto o Niente) ─────────────────────────
        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver"); // Assicura che il driver sia caricato
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // 🔒 DISABILITA AUTOCOMMIT: INIZIO TRANSAZIONE
            conn.setAutoCommit(false);

            // Inizializza i DAO condividendo LA STESSA CONNESSIONE
            AnagraficaCodFiscale1DAO daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(conn);
            Tessera1DAO              daoTessera    = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO        daoAssegnaz   = new TesseraDipend1DAOJDBCImpl(conn);

            // ── VERIFICHE BUSINESS LOGIC ──

            // A. Verifica Anagrafica
            if (daoAnagrafica.getByCodFiscale(codFiscale) == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Codice Fiscale non trovato in anagrafica.");
                return;
            }

            // B. Pessimistic Lock: Recupera tessera bloccando la riga per prevenire race conditions
            Tessera1 tessera = daoTessera.getTesseraByIdForUpdate(idTesseraUrl);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente a sistema.");
                return;
            }

            // C. Controllo Stato Tessera (è smarrita/guasta/indisponibile?)
            if (tessera.getDataOraIndisponibilita() != null && tessera.getDataOraIndisponibilita().isBefore(LocalDateTime.now())) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_FORBIDDEN, "Impossibile assegnare: la tessera risulta invalidata o indisponibile.");
                return;
            }

            // D. Controllo Overlap Tessera (Qualcun altro sta usando questa tessera in questo periodo?)
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTesseraUrl);
            for (TesseraDipend1 ass : assegnazioniEsistenti) {
                // Sovrapposizione rigorosa
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "La tessera risulta già assegnata nel periodo temporale selezionato.");
                    return;
                }
            }

            // E. Controllo Overlap Dipendente (Il dipendente ha già un'altra tessera in questo periodo?)
            List<TesseraDipend1> assegnazioniDipendente = daoAssegnaz.getAssegnazioniByDipendente(codFiscale);
            for (TesseraDipend1 ass : assegnazioniDipendente) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "Il dipendente possiede già una tessera attiva nel periodo temporale selezionato.");
                    return;
                }
            }

            // ── ESECUZIONE DELLE SCRITTURE ──

            // Aggiorniamo il tipo di tessera su TESSERA1 (allineamento logico)
            if (!daoTessera.updateCodTipoTessera(idTesseraUrl, codTipoTessera)) {
                throw new SQLException("Errore durante l'aggiornamento del tipo tessera (TESSERA1).");
            }

            // Inseriamo la nuova assegnazione
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTesseraUrl, codFiscale, dataInizio, dataFine);
            if (!daoAssegnaz.insertAssegnazione(nuovaAssegnazione)) {
                throw new SQLException("Errore durante il salvataggio dell'assegnazione (TESSERADIPEND1).");
            }

            // SE ARRIVIAMO QUI, TUTTO È ANDATO A BUON FINE
            conn.commit();
            ResponseUtil.sendOkNoData(response, "Tessera assegnata correttamente.");
            System.out.println("[AssegnaTesseraPutServlet] <<< Completato con successo");

        } catch (Exception e) {
            // ERRORE: ANNULLIAMO TUTTE LE OPERAZIONI PENDENTI
            System.err.println("[AssegnaTesseraPutServlet] Errore critico. Esecuzione Rollback: " + e.getMessage());
            e.printStackTrace();
            if (conn != null) {
                try {
                    conn.rollback();
                } catch (SQLException ex) {
                    System.err.println("Errore fatale durante il rollback: " + ex.getMessage());
                }
            }
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il processo di assegnazione.");
        } finally {
            // RILASCIO RISORSE
            if (conn != null) {
                try {
                    conn.setAutoCommit(true); // Ripristino stato default prima di chiudere
                    conn.close();
                } catch (SQLException ex) {
                    System.err.println("Errore in chiusura connessione: " + ex.getMessage());
                }
            }
        }
    }

    // ── Metodi di Utilità Locali ───────────────────────────────────────────────

    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) {
                props.load(is);
                return props;
            }
        } catch (Exception e) {
            System.err.println("Errore lettura db.properties: " + e.getMessage());
        }
        return null;
    }

    private String getStringSafe(JsonObject json, String key) {
        try {
            return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString().trim() : null;
        } catch (Exception e) {
            return null;
        }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}