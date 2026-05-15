package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAO;
import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale1;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDipend1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Properties;

/*
 * DAL FRONTEND MI ARRIVA CODICE FISCALE (DI TESSERADIPEND), ID TESSERA(DI TESSERA1), CODTIPOTESSERA(DI TESSERA1), 
 * SEDE (DI TESSERA1), DATA INIZIO ASSEGNAZIONE (DI TESSERADIPEND), DATA FINE ASSEGNAZIONE (DI TESSERADIPEND)
 * CON CUI FARE IL BIND TRA IL DIPENDENTE E LA TESSERA 
 * 
 * ESEMPIO CHIAMATA POST:
 * 
	Url:
		http://localhost:8080/ApplicativoBadgeVVF/assegnaTesseraServlet
 	Body:
 	{
	  "codiceFiscale": "BTTMTT05L08H501X",
	  "idTessera": "0000099999",
	  "sede": "TO",
	  "dataInizioAssegnazione": "2023-10-25T08:00:00.000Z",
	  "dataFineAssegnazione": "2029-10-25T18:00:00.000Z"
	}
	Headers:
		Key: Content-Type
		Value: application/json
 */

@WebServlet("/assegnaTesseraServlet")
public class assegnaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public assegnaTesseraServlet() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[assegnaTesseraServlet] >>> Inizio doPost");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String bodyJson = sb.toString();

        // ── 2. Parsa JSON ─────────────────────────────────────────────────────
        Gson gson = new Gson();
        JsonObject json;
        try {
            json = gson.fromJson(bodyJson, JsonObject.class);
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Body JSON non valido\"}");
            return;
        }

        // ── 3. Estrai campi dal frontend ──────────────────────────────────────
        String codFiscale             = getStringSafe(json, "codiceFiscale");
        String idTessera              = getStringSafe(json, "idTessera");
        String sede                   = getStringSafe(json, "sede");
        String dataInizioStr          = getStringSafe(json, "dataInizioAssegnazione");
        String dataFineStr            = getStringSafe(json, "dataFineAssegnazione");

        if (isBlank(codFiscale) || isBlank(idTessera) || isBlank(sede) || 
            isBlank(dataInizioStr) || isBlank(dataFineStr)) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Parametri obbligatori mancanti\"}");
            return;
        }

        // ── 4. Parsing Date (Gestione robusta per JSON/Angular) ───────────────
        LocalDateTime dataInizio = parseIsoDate(dataInizioStr);
        LocalDateTime dataFine   = parseIsoDate(dataFineStr);

        if (dataInizio == null || dataFine == null || dataInizio.isAfter(dataFine)) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Formato date non valido o data inizio successiva a data fine\"}");
            return;
        }

        // ── 5. Carica config DB ───────────────────────────────────────────────
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Configurazione DB non trovata\"}");
                return;
            }
            props.load(is);
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        // DAO Inizializzazione
        AnagraficaCodFiscale1DAO daoAnagrafica = null;
        Tessera1DAO              daoTessera    = null;
        TesseraDipend1DAO        daoAssegnaz   = null;

        try {
            daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(ip, port, db, user, pwd);
            daoTessera    = new Tessera1DAOJDBCImpl(ip, port, db, user, pwd);
            daoAssegnaz   = new TesseraDipend1DAOJDBCImpl(ip, port, db, user, pwd);

            // ── VERIFICA 1: Il codice fiscale esiste? ──────────────────────────
            AnagraficaCodFiscale1 anagrafica = daoAnagrafica.getByCodFiscale(codFiscale);
            if (anagrafica == null) {
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Codice Fiscale non trovato a sistema\"}");
                return;
            }

            // ── VERIFICA 2: La tessera esiste? ────────────────────────────────
            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Tessera inesistente\"}");
                return;
            }

            // ── VERIFICA 3: Vincoli Codice Tipo Tessera ('s' o 'd') ────────────
            String tipo = tessera.getCodTipoTessera() != null ? tessera.getCodTipoTessera().toLowerCase() : "";
            if (!tipo.equals("s") && !tipo.equals("d")) {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"La tessera non è assegnabile (tipo non consentito, deve essere 's' o 'd')\"}");
                return;
            }

            // ── VERIFICA 4: Sovrapposizione di assegnazione ────────────────────
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 assEsistente : assegnazioniEsistenti) {
                LocalDateTime startEsistente = assEsistente.getDataOraInizioAssegnazione();
                LocalDateTime endEsistente   = assEsistente.getDataOraFineAssegnazione();

                // Logica di overlap: reqStart < endEsistente AND reqEnd > startEsistente
                if (dataInizio.isBefore(endEsistente) && dataFine.isAfter(startEsistente)) {
                    response.setStatus(HttpServletResponse.SC_CONFLICT);
                    out.print("{\"esito\":\"KO\",\"messaggio\":\"La tessera risulta già assegnata nel periodo selezionato.\"}");
                    return;
                }
            }

            // ── AZIONE 1: Aggiornamento Sede sulla Tessera1 ───────────────────
            boolean aggiornata = daoTessera.updateSede(idTessera, sede);
            if (!aggiornata) {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Errore durante l'aggiornamento della sede della tessera.\"}");
                return;
            }

            // ── AZIONE 2: Inserimento Assegnazione ────────────────────────────
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTessera, codFiscale, dataInizio, dataFine);
            boolean inserita = daoAssegnaz.insertAssegnazione(nuovaAssegnazione);

            if (!inserita) {
                // Opzionale: Potresti voler rollbaccare la sede qui, ma in questo flusso semplice restituiamo errore.
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Errore durante il salvataggio dell'assegnazione.\"}");
                return;
            }

            // Tutto OK
            response.setStatus(HttpServletResponse.SC_OK);
            out.print("{\"esito\":\"OK\",\"messaggio\":\"Tessera assegnata correttamente.\"}");
            System.out.println("[assegnaTesseraServlet] >>> Fine doPost con successo");

        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Errore interno del server: " + e.getMessage() + "\"}");

        } finally {
            if (daoAnagrafica != null) daoAnagrafica.closeConnection();
            if (daoTessera != null)    daoTessera.closeConnection();
            if (daoAssegnaz != null)   daoAssegnaz.closeConnection();
            System.out.println("[assegnaTesseraServlet] Connessioni chiuse.");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        response.getWriter().print("{\"esito\":\"KO\",\"messaggio\":\"Endpoint supporta solo POST\"}");
    }

    // ── Utility ───────────────────────────────────────────────────────────────

    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    /**
     * Metodo helper per parsare le date dal frontend (Angular).
     * Gestisce sia il formato ISO UTC (es. 2023-10-25T10:00:00.000Z)
     * sia formati ISO Date Time standard senza timezone.
     */
    private LocalDateTime parseIsoDate(String dateStr) {
        try {
            if (dateStr.endsWith("Z")) {
                // Converte da UTC alla Timezone di default del server
                return ZonedDateTime.parse(dateStr).withZoneSameInstant(ZoneId.systemDefault()).toLocalDateTime();
            } else {
                return LocalDateTime.parse(dateStr, DateTimeFormatter.ISO_DATE_TIME);
            }
        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Errore parsing data: " + dateStr);
            return null;
        }
    }
}



