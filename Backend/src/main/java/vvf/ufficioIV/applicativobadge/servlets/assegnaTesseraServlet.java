package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
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

@WebServlet("/assegnaTesseraServlet")
public class assegnaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[assegnaTesseraServlet] >>> Inizio doPost");

        // 1. Leggi body JSON
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();

        if (bodyJson == null || bodyJson.trim().isEmpty()) {
            sendJsonResponse(response, HttpServletResponse.SC_BAD_REQUEST, "KO", "Body della richiesta vuoto o mancante.");
            return;
        }

        // 2. Parsa JSON
        JsonObject json;
        try {
            json = JsonParser.parseString(bodyJson).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            sendJsonResponse(response, HttpServletResponse.SC_BAD_REQUEST, "KO", "Body JSON non valido.");
            return;
        }

        // 3. Estrai campi dal frontend
        String codFiscale             = getStringSafe(json, "codiceFiscale");
        String idTessera              = getStringSafe(json, "idTessera");
        String sede                   = getStringSafe(json, "sede");
        String dataInizioStr          = getStringSafe(json, "dataInizioAssegnazione");
        String dataFineStr            = getStringSafe(json, "dataFineAssegnazione");

        if (isBlank(codFiscale) || isBlank(idTessera) || isBlank(sede) || isBlank(dataInizioStr) || isBlank(dataFineStr)) {
            sendJsonResponse(response, HttpServletResponse.SC_BAD_REQUEST, "KO", "Parametri obbligatori mancanti.");
            return;
        }

        // 4. Parsing Date
        LocalDateTime dataInizio = parseIsoDate(dataInizioStr);
        LocalDateTime dataFine   = parseIsoDate(dataFineStr);

        if (dataInizio == null || dataFine == null || dataInizio.isAfter(dataFine)) {
            sendJsonResponse(response, HttpServletResponse.SC_BAD_REQUEST, "KO", "Formato date non valido o data inizio successiva a data fine.");
            return;
        }

        // 5. Carica config DB
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                sendJsonResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "KO", "Configurazione DB non trovata.");
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

            // VERIFICA 1: Il codice fiscale esiste?
            AnagraficaCodFiscale1 anagrafica = daoAnagrafica.getByCodFiscale(codFiscale);
            if (anagrafica == null) {
                sendJsonResponse(response, HttpServletResponse.SC_NOT_FOUND, "KO", "Codice Fiscale non trovato a sistema.");
                return;
            }

            // VERIFICA 2: La tessera esiste?
            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                sendJsonResponse(response, HttpServletResponse.SC_NOT_FOUND, "KO", "Tessera inesistente.");
                return;
            }

            // VERIFICA 3: Vincoli Codice Tipo Tessera ('s' o 'd')
            String tipo = tessera.getCodTipoTessera() != null ? tessera.getCodTipoTessera().toLowerCase() : "";
            if (!tipo.equals("s") && !tipo.equals("d")) {
                sendJsonResponse(response, HttpServletResponse.SC_FORBIDDEN, "KO", "La tessera non è assegnabile (tipo non consentito, deve essere 's' o 'd').");
                return;
            }

            // VERIFICA 4: Sovrapposizione di assegnazione
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 assEsistente : assegnazioniEsistenti) {
                LocalDateTime startEsistente = assEsistente.getDataOraInizioAssegnazione();
                LocalDateTime endEsistente   = assEsistente.getDataOraFineAssegnazione();

                if (dataInizio.isBefore(endEsistente) && dataFine.isAfter(startEsistente)) {
                    sendJsonResponse(response, HttpServletResponse.SC_CONFLICT, "KO", "La tessera risulta già assegnata nel periodo selezionato.");
                    return;
                }
            }

            // AZIONE 1: Aggiornamento Sede
            boolean aggiornata = daoTessera.updateSede(idTessera, sede);
            if (!aggiornata) {
                sendJsonResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "KO", "Errore durante l'aggiornamento della sede della tessera.");
                return;
            }

            // AZIONE 2: Inserimento Assegnazione
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTessera, codFiscale, dataInizio, dataFine);
            boolean inserita = daoAssegnaz.insertAssegnazione(nuovaAssegnazione);

            if (!inserita) {
                sendJsonResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "KO", "Errore durante il salvataggio dell'assegnazione.");
                return;
            }

            sendJsonResponse(response, HttpServletResponse.SC_OK, "OK", "Tessera assegnata correttamente.");

        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Eccezione: " + e.getMessage());
            sendJsonResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "KO", "Errore interno del server: " + e.getMessage());
        } finally {
            if (daoAnagrafica != null) daoAnagrafica.closeConnection();
            if (daoTessera != null)    daoTessera.closeConnection();
            if (daoAssegnaz != null)   daoAssegnaz.closeConnection();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        sendJsonResponse(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "KO", "Endpoint supporta solo POST.");
    }

    // ── Utility ───────────────────────────────────────────────────────────────

    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    private LocalDateTime parseIsoDate(String dateStr) {
        try {
            if (dateStr.endsWith("Z")) {
                return ZonedDateTime.parse(dateStr).withZoneSameInstant(ZoneId.systemDefault()).toLocalDateTime();
            } else {
                return LocalDateTime.parse(dateStr, DateTimeFormatter.ISO_DATE_TIME);
            }
        } catch (Exception e) {
            System.err.println("[assegnaTesseraServlet] Errore parsing data: " + dateStr);
            return null;
        }
    }

    private void sendJsonResponse(HttpServletResponse response, int statusCode, String esito, String messaggio) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(statusCode);
        
        JsonObject resObj = new JsonObject();
        resObj.addProperty("esito", esito);
        resObj.addProperty("messaggio", messaggio);
        
        PrintWriter out = response.getWriter();
        out.print(new Gson().toJson(resObj));
        out.flush();
    }
}