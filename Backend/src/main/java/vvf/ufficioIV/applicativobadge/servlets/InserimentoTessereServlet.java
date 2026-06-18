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

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDecode1;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;


/**
 * ==========================================================================================
 * API ENDPOINT : /inserimentoTessereServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Inserimento massivo di una lista di tessere nel database. 
 * Esegue l'inserimento incrociato sulle tabelle Tessera1 e TesseraDecode1.
 * ==========================================================================================
 * * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         : Array di oggetti JSON
 * [
 * {
 * "idTessera": "stringa",     // Obbligatorio - ID della tessera
 * "codiceInterno": "stringa"  // Obbligatorio - Codice interno da associare
 * }
 * ]
 * * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendOkNoData
 * Struttura  :
 * {
 * "esito": "OK",
 * "messaggio": "Tessere (X) inserite correttamente.",
 * "data": null
 * }
 * * * 🚫 RESPONSE KO (Casi di errore - HTTP 400, 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza   : ResponseUtil.sendError
 * Casistiche :
 * - HTTP 400 : "Body della richiesta vuoto o mancante."
 * - HTTP 400 : "Body JSON non valido, atteso un array."
 * - HTTP 400 : "Sintassi JSON non valida."
 * - HTTP 400 : "Nessuna tessera inviata."
 * - HTTP 405 : "Usa POST" (Se l'endpoint viene chiamato in GET)
 * - HTTP 500 : "Configurazione DB non trovata."
 * - HTTP 500 : "Errore interno: Parametri obbligatori mancanti per il record con idTessera: <idTessera>"
 * - HTTP 500 : "Errore interno: Inserimento in Tessera1 fallito per idTessera: <idTessera>"
 * - HTTP 500 : "Errore interno: Inserimento in TesseraDecode1 fallito per idTessera: <idTessera>"
 * Struttura  :
 * {
 * "esito": "KO",
 * "messaggio": "<descrizione specifica dell'errore>"
 * }
 * ==========================================================================================
 */
@WebServlet("/inserimentoTessereServlet")
public class InserimentoTessereServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private static final String        DEFAULT_SEDE             = "00";
    private static final String        DEFAULT_COD_TIPO_TESSERA = "S";
    private static final Integer       DEFAULT_TESSERA_ATE      = 0;
    private static final LocalDateTime DEFAULT_DATA_ORA_INDISP  = LocalDateTime.of(9999, 12, 31, 23, 59, 59);

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[inserimentoTessereServlet] >>> Inizio doPost");

        // 1. Leggi body JSON
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();

        if (bodyJson == null || bodyJson.trim().isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body della richiesta vuoto o mancante.");
            return;
        }

        // 2. Parsa JSON come ARRAY
        JsonArray jsonArray;
        try {
            JsonElement parsedElement = JsonParser.parseString(bodyJson);
            if (!parsedElement.isJsonArray()) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Body JSON non valido, atteso un array.");
                return;
            }
            jsonArray = parsedElement.getAsJsonArray();
        } catch (JsonSyntaxException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Sintassi JSON non valida.");
            return;
        }

        if (jsonArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Nessuna tessera inviata.");
            return;
        }

        // 3. Carica config DB
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

        // CREIAMO LA CONNESSIONE QUI PER GESTIRE LA TRANSAZIONE 
        Connection sharedConnection = null;

        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + db;
            sharedConnection = DriverManager.getConnection(dbUrl, user, pwd);
            
            // 🌟 DISABILITIAMO L'AUTOCOMMIT (INIZIO TRANSAZIONE)
            sharedConnection.setAutoCommit(false);

            // Passiamo la stessa identica connessione ai due DAO
            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(sharedConnection);
            TesseraDecode1DAO daoTesseraDecode = new TesseraDecode1DAOJDBCImpl(sharedConnection);

            List<Tessera1> tessereDaInserire = new ArrayList<>();
            List<TesseraDecode1> decodeDaInserire = new ArrayList<>();

            // ====================================================================================
            // FASE 1: CONTROLLI MANIACALI E FORMATTAZIONE (PRE-FLIGHT CHECK)
            // ====================================================================================
            for (int i = 0; i < jsonArray.size(); i++) {
                JsonElement element = jsonArray.get(i);
                if (!element.isJsonObject()) {
                    throw new Exception("L'elemento all'indice " + i + " non è un oggetto JSON valido.");
                }

                JsonObject json = element.getAsJsonObject();
                String rawIdTessera     = getStringSafe(json, "idTessera");
                String rawCodiceInterno = getStringSafe(json, "codiceInterno");

                if (isBlank(rawIdTessera) || isBlank(rawCodiceInterno)) {
                    throw new Exception("Parametri obbligatori mancanti all'indice " + i + ".");
                }

                // Formattazione
                String idTessera;
                // Il codice interno rimane ESATTAMENTE quello passato dal frontend (rimuoviamo solo gli spazi iniziali/finali accidentali)
                String codiceInterno = rawCodiceInterno.trim(); 

                // Nuovo controllo di sicurezza per la lunghezza massima
                if (codiceInterno.length() > 20) {
                    throw new Exception("Errore di validazione all'indice " + i + ": Il codice interno supera la lunghezza massima consentita di 20 caratteri (Trovati: " + codiceInterno.length() + ").");
                }
                
                try {
                    // Applichiamo il padding a 10 zeri SOLO all'ID Tessera
                    idTessera = formattaStringaNumerica(rawIdTessera, 10, "ID Tessera");
                } catch (IllegalArgumentException e) {
                    throw new Exception("Errore di validazione all'indice " + i + ": " + e.getMessage());
                }

                // Verifica Duplicati sul Database
                if (daoTessera.getTesseraById(idTessera) != null) {
                    throw new Exception("Inserimento bloccato: La tessera " + idTessera + " esiste già nel Database.");
                }
                if (daoTesseraDecode.getByCodiceInterno(codiceInterno) != null) {
                    throw new Exception("Inserimento bloccato: Il codice interno " + codiceInterno + " è già assegnato.");
                }

                // Verifica Duplicati interni al JSON
                for (Tessera1 t : tessereDaInserire) {
                    if (t.getIdTessera().equals(idTessera)) {
                        throw new Exception("Payload non valido: La tessera " + idTessera + " è presente più volte nella richiesta.");
                    }
                }
                for (TesseraDecode1 td : decodeDaInserire) {
                    if (td.getCodiceInterno().equals(codiceInterno)) {
                        throw new Exception("Payload non valido: Il codice interno " + codiceInterno + " è presente più volte nella richiesta.");
                    }
                }

                tessereDaInserire.add(new Tessera1(idTessera, DEFAULT_COD_TIPO_TESSERA, DEFAULT_SEDE, DEFAULT_DATA_ORA_INDISP, DEFAULT_TESSERA_ATE));
                decodeDaInserire.add(new TesseraDecode1(idTessera, codiceInterno));
            }

            // ====================================================================================
            // FASE 2: INSERIMENTO EFFETTIVO NEL DATABASE
            // ====================================================================================
            int tessereInserite = 0;
            for (int i = 0; i < tessereDaInserire.size(); i++) {
                Tessera1 tessera = tessereDaInserire.get(i);
                TesseraDecode1 decode = decodeDaInserire.get(i);

                if (!daoTessera.insertTessera(tessera)) {
                    throw new Exception("Inserimento in Tessera1 fallito per idTessera: " + tessera.getIdTessera());
                }

                if (!daoTesseraDecode.insertTesseraDecode(decode)) {
                    throw new Exception("Inserimento in TesseraDecode1 fallito per idTessera: " + tessera.getIdTessera());
                }

                tessereInserite++;
            }

            // 🌟 TUTTO E' ANDATO BENE: SALVIAMO DEFINITIVAMENTE I DATI NEL DB (COMMIT) 🌟
            sharedConnection.commit();
            ResponseUtil.sendOkNoData(response, "Tessere (" + tessereInserite + ") validate ed inserite correttamente con un'unica transazione.");

        } catch (Exception e) {
            System.err.println("[inserimentoTessereServlet] Eccezione: " + e.getMessage());
            
            // 🌟 C'E' STATO UN ERRORE: ANNULLIAMO TUTTE LE OPERAZIONI PENDENTI (ROLLBACK) 🌟
            if (sharedConnection != null) {
                try {
                    sharedConnection.rollback();
                    System.err.println("[inserimentoTessereServlet] Rollback eseguito: nessuna tessera del blocco è stata salvata.");
                } catch (SQLException ex) {
                    System.err.println("[inserimentoTessereServlet] Errore critico durante il rollback: " + ex.getMessage());
                }
            }
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
        } finally {
            // 🌟 CHIUSURA DELLA CONNESSIONE CONDIVISA 🌟
            if (sharedConnection != null) {
                try {
                    sharedConnection.setAutoCommit(true); // E' buona prassi ripristinarlo prima di chiudere
                    sharedConnection.close();
                } catch (SQLException ex) {
                    System.err.println("Errore durante la chiusura della connessione: " + ex.getMessage());
                }
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Usa POST");
    }

    // ── Utility locali ────────────────────────────────────────────────────────

    private String formattaStringaNumerica(String input, int targetLength, String nomeCampo) throws IllegalArgumentException {
        input = input.trim();
        
        if (!input.matches("\\d+")) {
            throw new IllegalArgumentException("Il campo " + nomeCampo + " deve contenere solo numeri. Valore anomalo: '" + input + "'");
        }
        if (input.length() > targetLength) {
            throw new IllegalArgumentException("Il campo " + nomeCampo + " supera la lunghezza di " + targetLength + " caratteri.");
        }
        
        StringBuilder sb = new StringBuilder(input);
        while (sb.length() < targetLength) {
            sb.insert(0, "0");
        }
        return sb.toString();
    }

    private String getStringSafe(JsonObject json, String key) {
        try { 
            return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null; 
        } catch (Exception e) { 
            return null; 
        }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}