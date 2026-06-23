package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
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
 * API ENDPOINT : /revocaTessera/{idTessera}
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Revoca l'assegnazione attiva di una tessera specifica, aggiornandone 
 * la data e l'ora di fine assegnazione.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type   : application/json
 * Path Parameter : {idTessera} -> L'identificativo della tessera da revocare (es. /revocaTessera/12345)
 * Body           :
 * {
 * "dataOraFineAssegnazione": "15/06/2026 14:30:00"  // Obbligatorio. Formato esatto: dd/MM/yyyy HH:mm:ss
 * }
 * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessera revocata con successo." 
 * // OPPURE: "Nessuna assegnazione attiva trovata da revocare per questa tessera."
 * "data": null
 * }
 * * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "ID Tessera mancante nell'URL."
 * - HTTP 400 : "Body JSON non valido."
 * - HTTP 400 : "Parametro dataOraFineAssegnazione mancante."
 * - HTTP 400 : "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss)."
 * - HTTP 500 : "Errore DB Config"
 * - HTTP 500 : "Errore interno: <dettaglio eccezione>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/revocaTessera/*")
public class RevocaTesseraServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "ID Tessera mancante nell'URL.");
            return;
        }
        String idTessera = pathInfo.substring(1);

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

        String dataFineStr = getStringSafe(json, "dataOraFineAssegnazione");

        if (isBlank(dataFineStr)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro dataOraFineAssegnazione mancante.");
            return;
        }

        LocalDateTime dataFine;
        try {
            dataFine = LocalDateTime.parse(dataFineStr, formatter);
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
            return;
        }

        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config");
            return;
        }

        TesseraDipend1DAO daoAssegnaz = null;

        try {
            daoAssegnaz = new TesseraDipend1DAOJDBCImpl(props.getProperty("db.ip"), props.getProperty("db.port"), props.getProperty("db.name"), props.getProperty("db.user"), props.getProperty("db.password"));

            // 23/06/2026 LOGICA
            // Controlliamo che la data di fine non sia antecedente alla data di inizio
            List<TesseraDipend1> assegnazioni = daoAssegnaz.getAssegnazioniByTessera(idTessera);
            for (TesseraDipend1 ass : assegnazioni) {
                // Troviamo l'assegnazione attualmente attiva (che non è ancora finita)
                if (ass.getDataOraFineAssegnazione().isAfter(LocalDateTime.now())) {
                    if (dataFine.isBefore(ass.getDataOraInizioAssegnazione())) {
                        ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, 
                            "Operazione bloccata: La data di fine assegnazione non può essere antecedente alla data in cui la tessera è stata assegnata (" 
                            + ass.getDataOraInizioAssegnazione().format(formatter) + ").");
                        return; // Interrompiamo tutto
                    }
                }
            }
            // 23/06/26
            
            // Revoca: modifichiamo solo l'assegnazione
            boolean aggiornato = daoAssegnaz.revocaAssegnazioneAttiva(idTessera, dataFine);

            // Nota: Se non ci sono assegnazioni attive, non è un errore server, ma lo segnaliamo
            if (aggiornato) {
                ResponseUtil.sendOkNoData(response, "Tessera revocata con successo.");
            } else {
                ResponseUtil.sendOkNoData(response, "Nessuna assegnazione attiva trovata da revocare per questa tessera.");
            }

        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno: " + e.getMessage());
        } finally {
            if (daoAssegnaz != null) daoAssegnaz.closeConnection();
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