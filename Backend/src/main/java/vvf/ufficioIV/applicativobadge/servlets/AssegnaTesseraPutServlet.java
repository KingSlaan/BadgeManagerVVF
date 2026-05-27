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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Properties;


/**
 * -----------------------------------------------------------------------------
 * SERVIZIO: Assegna Tessera
 * DESCRIZIONE: Crea una nuova assegnazione per una tessera specifica ad un dipendente.
 * METODO: PUT
 * URL: http://host:port/ApplicativoBadgeVVF/AssegnaTessera/{idTessera}
 *
 * BODY ESEMPIO (JSON):
 * {
 * "codiceFiscale": "BTTMTT05L08H501X",
 * "codTipoTessera": "S",
 * "dataOraInizioAssegnazione": "15/05/2024 08:30:00",
 * "dataOraFineAssegnazione": "31/12/9999 23:59:59"
 * }
 * -----------------------------------------------------------------------------
 */
@WebServlet("/AssegnaTessera/*")
public class AssegnaTesseraPutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        // 1. Estrai ID dal Path
        String pathInfo = request.getPathInfo(); // Restituisce "/0000090801"
        if (pathInfo == null || pathInfo.equals("/")) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTessera = pathInfo.substring(1);

        // 2. Leggi Body
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        
        JsonObject json;
        try {
            json = JsonParser.parseString(sb.toString()).getAsJsonObject();
        } catch (JsonSyntaxException | IllegalStateException e) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        // 3. Estrai Parametri
        String codFiscale = getStringSafe(json, "codiceFiscale");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");
        String dataInizioStr = getStringSafe(json, "dataOraInizioAssegnazione");
        String dataFineStr = getStringSafe(json, "dataOraFineAssegnazione");

        if (isBlank(codFiscale) || isBlank(codTipoTessera) || isBlank(dataInizioStr) || isBlank(dataFineStr)) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }

        LocalDateTime dataInizio, dataFine;
        try {
            dataInizio = LocalDateTime.parse(dataInizioStr, formatter);
            dataFine = LocalDateTime.parse(dataFineStr, formatter);
        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        // 4. Carica DB e inizializza DAO
        Properties props = loadDbProps();
        if(props == null) {
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
            return;
        }

        AnagraficaCodFiscale1DAO daoAnagrafica = null;
        Tessera1DAO daoTessera = null;
        TesseraDipend1DAO daoAssegnaz = null;

        try {
            daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoTessera = new Tessera1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoAssegnaz = new TesseraDipend1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));

            // Verifiche Business Logic (come nella versione POST)
            AnagraficaCodFiscale1 anagrafica = daoAnagrafica.getByCodFiscale(codFiscale);
            if (anagrafica == null) {
                sendErrorResponse(response, HttpServletResponse.SC_NOT_FOUND, "Codice Fiscale non trovato.");
                return;
            }

            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                sendErrorResponse(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente.");
                return;
            }

            if (!codTipoTessera.equalsIgnoreCase("s") && !codTipoTessera.equalsIgnoreCase("d")) {
                sendErrorResponse(response, HttpServletResponse.SC_FORBIDDEN, "Tipo tessera non assegnabile.");
                return;
            }

            // Verifica sovrapposizioni
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 ass : assegnazioniEsistenti) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    sendErrorResponse(response, HttpServletResponse.SC_CONFLICT, "La tessera risulta già assegnata nel periodo selezionato.");
                    return;
                }
            }

            // Insert
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTessera, codFiscale, dataInizio, dataFine);
            if (daoAssegnaz.insertAssegnazione(nuovaAssegnazione)) {
                sendSuccessResponse(response, "Tessera assegnata correttamente.");
            } else {
                sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore salvataggio assegnazione.");
            }

        } catch (Exception e) {
            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoAnagrafica != null) daoAnagrafica.closeConnection();
            if (daoTessera != null) daoTessera.closeConnection();
            if (daoAssegnaz != null) daoAssegnaz.closeConnection();
        }
    }

    // --- Metodi di utilità standardizzati (usali anche nelle altre due servlet) ---
    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) { props.load(is); return props; }
        } catch (Exception e) {}
        return null;
    }
    private String getStringSafe(JsonObject json, String key) {
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }
    private boolean isBlank(String s) { return s == null || s.trim().isEmpty(); }
    
    private void sendErrorResponse(HttpServletResponse response, int statusCode, String message) throws IOException {
        response.setContentType("application/json"); response.setCharacterEncoding("UTF-8"); response.setStatus(statusCode);
        JsonObject errorObj = new JsonObject(); errorObj.addProperty("esito", "KO"); errorObj.addProperty("messaggio", message);
        response.getWriter().print(new Gson().toJson(errorObj));
    }
    private void sendSuccessResponse(HttpServletResponse response, String message) throws IOException {
        response.setContentType("application/json"); response.setCharacterEncoding("UTF-8"); response.setStatus(HttpServletResponse.SC_OK);
        JsonObject obj = new JsonObject(); obj.addProperty("esito", "OK"); obj.addProperty("messaggio", message);
        response.getWriter().print(new Gson().toJson(obj));
    }
}