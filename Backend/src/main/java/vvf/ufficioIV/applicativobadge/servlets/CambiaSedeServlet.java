package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /cambiaSedeServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Modifica la sede e il tipo di una tessera esistente.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "idTessera": "stringa",        // (Obbligatorio) Identificativo della tessera
 * "sede": "stringa",             // (Obbligatorio) Sede da aggiornare sulla tessera
 * "codTipoTessera": "D" | "S"    // (Obbligatorio) 'D' (dipendente) o 'S' (sostitutiva)
 * }
 *
 * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Dati tessera aggiornati correttamente.",
 * "data": null
 * }
 *
 * 🚫 RESPONSE KO (Casi di errore)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 (Bad Request) : Body vuoto o JSON non valido, parametri mancanti, codTipoTessera errato.
 * - HTTP 404 (Not Found)   : Tessera inesistente.
 * - HTTP 405 (Not Allowed) : L'endpoint è stato richiamato in GET invece che in POST.
 * - HTTP 500 (Server Error): Configurazione DB mancante, errori in aggiornamento DB.
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/cambiaSedeServlet")
public class CambiaSedeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[cambiaSedeServlet] >>> Inizio doPost");

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();
        System.out.println("[cambiaSedeServlet] Body ricevuto: " + bodyJson);

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
        String idTessera      = getStringSafe(json, "idTessera");
        String sede           = getStringSafe(json, "sede");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");

        System.out.println("[cambiaSedeServlet] Parametri ricevuti:");
        System.out.println("  idTessera      = " + idTessera);
        System.out.println("  sede           = " + sede);
        System.out.println("  codTipoTessera = " + codTipoTessera);

        // ── 4. Validazione obbligatori ────────────────────────────────────────
        if (isBlank(idTessera) || isBlank(sede) || isBlank(codTipoTessera)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori (idTessera, sede, codTipoTessera) mancanti.");
            return;
        }

        // ── 5. Validazione codTipoTessera ('D' o 'S') ─────────────────────────
        String codTipoTesseraUpper = codTipoTessera.toUpperCase();
        if (!codTipoTesseraUpper.equals("D") && !codTipoTesseraUpper.equals("S")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
                "Valore codTipoTessera non valido: deve essere 'D' (dipendente) o 'S' (sostitutiva).");
            return;
        }

        // ── 6. Carica config DB ───────────────────────────────────────────────
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

        Tessera1DAO daoTessera = null;

        try {
            daoTessera = new Tessera1DAOJDBCImpl(ip, port, db, user, pwd);

            // VERIFICA: La tessera esiste?
            System.out.println("[cambiaSedeServlet] Verifica esistenza tessera...");
            Tessera1 tessera = daoTessera.getTesseraById(idTessera);
            if (tessera == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Tessera inesistente.");
                return;
            }
            System.out.println("[cambiaSedeServlet] Tessera trovata: " + idTessera);

            // AZIONE UNIFICATA: Aggiorna Sede e Tipo Tessera in una singola transazione
            System.out.println("[cambiaSedeServlet] Aggiornamento sede e codTipoTessera...");
            boolean datiAggiornati = daoTessera.updateSedeECodTipo(idTessera, sede, codTipoTesseraUpper);
            
            if (!datiAggiornati) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Errore durante l'aggiornamento dei dati della tessera.");
                return;
            }
            System.out.println("[cambiaSedeServlet] Dati aggiornati OK.");

            // Nessun dato da restituire: operazione di scrittura → data: null
            ResponseUtil.sendOkNoData(response, "Dati tessera aggiornati correttamente.");
            System.out.println("[cambiaSedeServlet] >>> Fine doPost con successo.");

        } catch (Exception e) {
            System.err.println("[cambiaSedeServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                "Errore interno del server: " + e.getMessage());
        } finally {
            if (daoTessera != null) daoTessera.closeConnection();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Endpoint supporta solo POST.");
    }

    // ── Utility ───────────────────────────────────────────────────────────────

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