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
        
        // 1. Estrai ID dal Path
        String pathInfo = request.getPathInfo(); // Restituisce "/0000090801"
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
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
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido.");
            return;
        }

        // 3. Estrai Parametri
        String codFiscale     = getStringSafe(json, "codiceFiscale");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");
        String dataInizioStr  = getStringSafe(json, "dataOraInizioAssegnazione");
        String dataFineStr    = getStringSafe(json, "dataOraFineAssegnazione");

        if (isBlank(codFiscale) || isBlank(codTipoTessera) || isBlank(dataInizioStr) || isBlank(dataFineStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }

        LocalDateTime dataInizio, dataFine;
        try {
            dataInizio = LocalDateTime.parse(dataInizioStr, formatter);
            dataFine   = LocalDateTime.parse(dataFineStr, formatter);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        // 4. Carica DB e inizializza DAO
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Configurazione DB non trovata.");
            return;
        }

        AnagraficaCodFiscale1DAO daoAnagrafica = null;
        Tessera1DAO              daoTessera    = null;
        TesseraDipend1DAO        daoAssegnaz   = null;

        try {
            daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoTessera    = new Tessera1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));
            daoAssegnaz   = new TesseraDipend1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));

            // Verifiche Business Logic

            // Verifica: il codice fiscale esiste in anagrafica?
            AnagraficaCodFiscale1 anagrafica = daoAnagrafica.getByCodFiscale(codFiscale);
            if (anagrafica == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Codice Fiscale non trovato.");
                return;
            }

            // Verifica: la tessera esiste?
            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente.");
                return;
            }

            // Verifica: tipo tessera valido?
            if (!codTipoTessera.equalsIgnoreCase("s") && !codTipoTessera.equalsIgnoreCase("d")) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_FORBIDDEN, "Tipo tessera non assegnabile.");
                return;
            }

            // Verifica: sovrapposizioni di assegnazione
            List<TesseraDipend1> assegnazioniEsistenti = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 ass : assegnazioniEsistenti) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, "La tessera risulta già assegnata nel periodo selezionato.");
                    return;
                }
            }

            // Verifica: sovrapposizioni di assegnazione per il DIPENDENTE (Nuovo controllo)
            List<TesseraDipend1> assegnazioniDipendente = daoAssegnaz.getAssegnazioniByDipendente(codFiscale);
            for (TesseraDipend1 ass : assegnazioniDipendente) {
                if (dataInizio.isBefore(ass.getDataOraFineAssegnazione()) && dataFine.isAfter(ass.getDataOraInizioAssegnazione())) {
                    ResponseUtil.sendError(response, HttpServletResponse.SC_CONFLICT, 
                        "Il dipendente possiede già una tessera attiva nel periodo temporale selezionato.");
                    return;
                }
            }
            
            // Insert nuova assegnazione
            TesseraDipend1 nuovaAssegnazione = new TesseraDipend1(idTessera, codFiscale, dataInizio, dataFine);
            if (daoAssegnaz.insertAssegnazione(nuovaAssegnazione)) {
                ResponseUtil.sendOkNoData(response, "Tessera assegnata correttamente.");
            } else {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore salvataggio assegnazione.");
            }

        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoAnagrafica != null) daoAnagrafica.closeConnection();
            if (daoTessera != null)    daoTessera.closeConnection();
            if (daoAssegnaz != null)   daoAssegnaz.closeConnection();
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
        try { return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; }
        catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) { return s == null || s.trim().isEmpty(); }
}