package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import vvf.ufficioIV.applicativobadge.entity.TesseraDecode1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.util.Properties;

/*
 * QUESTA SERVLET SERVE COME INIZIALIZZAZIONE TESSERA CON OPZIONI DI DEFAULT, POI VA ASSEGNATA A UN DIPENDENTE
 * 
 * ESEMPIO CHIAMATA POST:
 * 
	Url:
		http://localhost:8080/ApplicativoBadgeVVF/inserimentoTessereServlet
 	Body:
 		{
    		"idTessera": "0000099999",
    		"codiceInterno": "9999999999"
		}
	Headers:
		Key: Content-Type
		Value: application/json
 */


@WebServlet("/inserimentoTessereServlet")
public class inserimentoTessereServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // ── Valori di default ─────────────────────────────────────────────────────
    private static final String         DEFAULT_SEDE              = "00";
    private static final String         DEFAULT_COD_TIPO_TESSERA  = "S";
    private static final Integer        DEFAULT_TESSERA_ATE       = 0;
    private static final LocalDateTime  DEFAULT_DATA_ORA_INDISP   =
        LocalDateTime.of(9999, 12, 31, 23, 59, 59);

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[inserimentoTessereServlet] >>> Inizio doPost");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String bodyJson = sb.toString();

        System.out.println("[inserimentoTessereServlet] Body ricevuto (lunghezza " + bodyJson.length() + "): " + bodyJson);

        // ── 2. Parsa JSON ─────────────────────────────────────────────────────
        Gson gson = new Gson();
        JsonObject json;
        try {
            json = gson.fromJson(bodyJson, JsonObject.class);
        } catch (Exception e) {
            System.err.println("[inserimentoTessereServlet] Body JSON non valido: " + e.getMessage());
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Body JSON non valido\"}");
            return;
        }

        // ── 3. Estrai campi dal frontend (solo idTessera e codiceInterno) ─────
        String idTessera     = getStringSafe(json, "idTessera");
        String codiceInterno = getStringSafe(json, "codiceInterno");

        System.out.println("[inserimentoTessereServlet] Parametri ricevuti dal frontend:");
        System.out.println("  idTessera     = " + idTessera);
        System.out.println("  codiceInterno = " + codiceInterno);

        // ── 4. Validazione obbligatori ────────────────────────────────────────
        if (isBlank(idTessera) || isBlank(codiceInterno)) {
            System.err.println("[inserimentoTessereServlet] Parametri obbligatori mancanti!");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Parametri obbligatori mancanti: idTessera e codiceInterno\"}");
            return;
        }

        // ── 5. Applica valori di default ──────────────────────────────────────
        String        sede                 = DEFAULT_SEDE;
        String        codTipoTessera       = DEFAULT_COD_TIPO_TESSERA;
        Integer       tesseraAte           = DEFAULT_TESSERA_ATE;
        LocalDateTime dataOraIndisponibilita = DEFAULT_DATA_ORA_INDISP;

        System.out.println("[inserimentoTessereServlet] Valori di default applicati:");
        System.out.println("  sede                  = " + sede);
        System.out.println("  codTipoTessera        = " + codTipoTessera);
        System.out.println("  tesseraAte            = " + tesseraAte);
        System.out.println("  dataOraIndisponibilita= " + dataOraIndisponibilita);

        // ── 6. Carica config DB ───────────────────────────────────────────────
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                System.err.println("[inserimentoTessereServlet] db.properties non trovato!");
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

        System.out.println("[inserimentoTessereServlet] Connessione DB: " + ip + ":" + port + "/" + db);

     // ── 7. Inserimento DB ─────────────────────────────────────────────────
        TesseraDecode1DAO daoTesseraDecode = null;
        Tessera1DAO       daoTessera       = null;

        try {
            // INSERT TESSERA1 prima (tabella padre)
            daoTessera = new Tessera1DAOJDBCImpl(ip, port, db, user, pwd);
            System.out.println("[inserimentoTessereServlet] Inserimento in TESSERA1...");
            boolean okTessera = daoTessera.insertTessera(
                new Tessera1(idTessera, codTipoTessera, sede, dataOraIndisponibilita, tesseraAte)
            );

            if (!okTessera) {
                System.err.println("[inserimentoTessereServlet] insertTessera ha restituito false");
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Inserimento Tessera1 fallito\"}");
                return;
            }
            System.out.println("[inserimentoTessereServlet] TESSERA1 OK");

            // INSERT TESSERADECODE1 dopo (tabella figlia)
            daoTesseraDecode = new TesseraDecode1DAOJDBCImpl(ip, port, db, user, pwd);
            System.out.println("[inserimentoTessereServlet] Inserimento in TESSERADECODE1...");
            boolean okDecode = daoTesseraDecode.insertTesseraDecode(
                new TesseraDecode1(idTessera, codiceInterno)
            );

            if (!okDecode) {
                System.err.println("[inserimentoTessereServlet] insertTesseraDecode ha restituito false, rollback TESSERA1...");
                daoTessera.deleteTesseraById(idTessera);
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"esito\":\"KO\",\"messaggio\":\"Inserimento TesseraDecode1 fallito\"}");
                return;
            }
            System.out.println("[inserimentoTessereServlet] TESSERADECODE1 OK");

            response.setStatus(HttpServletResponse.SC_OK);
            out.print("{\"esito\":\"OK\",\"messaggio\":\"Tessera inserita correttamente\"}");
            System.out.println("[inserimentoTessereServlet] >>> Fine doPost con successo");

        } catch (Exception e) {
            System.err.println("[inserimentoTessereServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();

            // Rollback: elimina TESSERA1 se già inserita
            if (daoTessera != null) {
                try {
                    System.err.println("[inserimentoTessereServlet] Tentativo rollback TESSERA1...");
                    daoTessera.deleteTesseraById(idTessera);
                } catch (Exception ex) {
                    System.err.println("[inserimentoTessereServlet] Rollback fallito: " + ex.getMessage());
                }
            }

            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.print("{\"esito\":\"KO\",\"messaggio\":\"Errore interno: " + e.getMessage() + "\"}");

        } finally {
            if (daoTessera != null)       daoTessera.closeConnection();
            if (daoTesseraDecode != null) daoTesseraDecode.closeConnection();
            System.out.println("[inserimentoTessereServlet] Connessioni chiuse.");
        }
    }

    // ── Utility ───────────────────────────────────────────────────────────────
    private String getStringSafe(JsonObject json, String key) {
        try { return json.get(key).getAsString(); } catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        response.getWriter().print("{\"esito\":\"KO\",\"messaggio\":\"Usa POST\"}");
    }
}