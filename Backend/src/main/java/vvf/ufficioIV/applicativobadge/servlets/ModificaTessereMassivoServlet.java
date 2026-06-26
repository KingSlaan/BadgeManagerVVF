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

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDipend1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera;
import vvf.ufficioIV.applicativobadge.entity.TesseraDipend;
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
 * API ENDPOINT : /modificaTessereMassivo
 * METODO HTTP  : PUT
 * DESCRIZIONE  : Modifica in modo massivo una lista di tessere. Permette di invalidarle,
 * modificarne la sede e/o modificarne il tipo tessera (D/S).
 * Tutte le operazioni sono eseguite all'interno della stessa transazione.
 * ==========================================================================================
 * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json
 * Body         :
 * {
 * "idTessere": ["123", "456", "789"],
 * "dataOraIndisponibilita": "04/06/2026 15:30:00",  // (Opzionale se si modifica solo sede/tipo)
 * "sede": "ROMA",                                   // (Opzionale)
 * "codTipoTessera": "D"                             // (Opzionale) 'D' o 'S'
 * }
 * ==========================================================================================
 */
@WebServlet("/modificaTessereMassivo")
public class ModificaTessereMassivoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[ModificaTessereMassivoServlet] >>> Inizio elaborazione massiva");

        // ── 1. Estrazione e Parsing JSON Body ──────────────────────────────────
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

        // ── 2. Validazione Lista Tessere ───────────────────────────────────────
        if (!json.has("idTessere") || !json.get("idTessere").isJsonArray()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametro 'idTessere' mancante o non array.");
            return;
        }
        JsonArray idTessereArray = json.getAsJsonArray("idTessere");
        if (idTessereArray.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "L'array 'idTessere' è vuoto.");
            return;
        }

        // ── 3. Estrazione e Normalizzazione Campi ──────────────────────────────
        String dataIndispStr  = getStringSafe(json, "dataOraIndisponibilita");
        String sede           = getStringSafe(json, "sede");
        String codTipoTessera = getStringSafe(json, "codTipoTessera");

        if (sede != null) sede = sede.toUpperCase();
        if (codTipoTessera != null) codTipoTessera = codTipoTessera.toUpperCase();

        boolean doInvalida           = !isBlank(dataIndispStr);
        boolean doModificaAnagrafica = !isBlank(sede) || !isBlank(codTipoTessera);

        // Se non è richiesta alcuna operazione
        if (!doInvalida && !doModificaAnagrafica) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Nessuna operazione richiesta. Inviare dataOraIndisponibilita, sede o codTipoTessera.");
            return;
        }

        // Validazione Parametri Anagrafici
        if (!isBlank(codTipoTessera) && !codTipoTessera.equals("D") && !codTipoTessera.equals("S")) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Valore codTipoTessera non valido: deve essere 'D' o 'S'.");
            return;
        }
        if (!isBlank(sede) && sede.length() > 10) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "La sigla della sede supera i 10 caratteri consentiti.");
            return;
        }

        // Validazione Data
        LocalDateTime dataIndisp = null;
        if (doInvalida) {
            try {
                dataIndisp = LocalDateTime.parse(dataIndispStr, formatter);
            } catch (Exception e) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato data non valido (atteso dd/MM/yyyy HH:mm:ss).");
                return;
            }
        }

        // ── 4. Caricamento DB Config ───────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore DB Config: file non trovato.");
            return;
        }

        // ── 5. GESTIONE TRANSAZIONALE ──────────────────────────────────────────
        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            // DISABILITA AUTOCOMMIT: Inizio Transazione All-or-Nothing
            conn.setAutoCommit(false);

            Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(conn);
            TesseraDipend1DAO daoAssegnaz = new TesseraDipend1DAOJDBCImpl(conn);

            int contatoreModificateAnagrafica = 0;
            int contatoreInvalidate = 0;
            int contatoreAccorciate = 0;

            // ── 6. CICLO SULLA LISTA DELLE TESSERE ─────────────────────────────
            for (JsonElement element : idTessereArray) {
                String idTessera = element.getAsString().trim().toUpperCase();

                if (idTessera.length() > 10) {
                    throw new IllegalArgumentException("L'ID Tessera '" + idTessera + "' supera i 10 caratteri.");
                }

                // A. LOCK DELLA SINGOLA TESSERA (Lock Pessimistico)
                Tessera tessera = daoTessera.getTesseraByIdForUpdate(idTessera);
                if (tessera == null) {
                    throw new IllegalArgumentException("Tessera non trovata nel sistema: " + idTessera);
                }

                // B. GESTIONE MODIFICA ANAGRAFICA (Sede / Tipo Tessera)
                if (doModificaAnagrafica) {
                    // Controllo: se modifico solo i dati (no invalidazione), la tessera non deve essere già invalidata.
                    if (!doInvalida && tessera.getDataOraIndisponibilita() != null && tessera.getDataOraIndisponibilita().isBefore(LocalDateTime.now())) {
                        throw new IllegalArgumentException("Impossibile modificare i dati della tessera " + idTessera + ": risulta già invalidata.");
                    }

                    boolean anagraficaAggiornata = false;
                    if (!isBlank(sede) && !isBlank(codTipoTessera)) {
                        anagraficaAggiornata = daoTessera.updateSedeECodTipo(idTessera, sede, codTipoTessera);
                    } else if (!isBlank(sede)) {
                        anagraficaAggiornata = daoTessera.updateSede(idTessera, sede);
                    } else if (!isBlank(codTipoTessera)) {
                        anagraficaAggiornata = daoTessera.updateCodTipoTessera(idTessera, codTipoTessera);
                    }

                    if (!anagraficaAggiornata) {
                        throw new SQLException("Impossibile aggiornare i dati anagrafici per la tessera: " + idTessera);
                    }
                    contatoreModificateAnagrafica++;
                }

                // C. GESTIONE INVALIDAZIONE
                if (doInvalida) {
                    // Protezione Paradossi Temporali
                    List<TesseraDipend> assegnazioni = daoAssegnaz.getAssegnazioniByTessera(idTessera);
                    for (TesseraDipend ass : assegnazioni) {
                        if (ass.getDataOraFineAssegnazione().isAfter(LocalDateTime.now())) {
                            if (dataIndisp.isBefore(ass.getDataOraInizioAssegnazione())) {
                                throw new IllegalArgumentException("Paradosso temporale sulla tessera " + idTessera + ": la data di invalidazione è antecedente all'inizio dell'assegnazione corrente.");
                            }
                        }
                    }

                    // Invalidazione fisica della tessera
                    boolean invalidata = daoTessera.invalidaTessera(idTessera, dataIndisp);
                    if (!invalidata) {
                        throw new SQLException("Impossibile aggiornare la data di invalidazione per la tessera: " + idTessera);
                    }
                    contatoreInvalidate++;

                    // Revoca/Accorciamento assegnazioni attive
                    boolean assegnazioneAccorciata = daoAssegnaz.revocaAssegnazioneAttiva(idTessera, dataIndisp);
                    if (assegnazioneAccorciata) {
                        contatoreAccorciate++;
                    }
                }
            }

            // COMMIT: Conferma tutte le modifiche per tutte le tessere
            conn.commit();
            
            // Creazione risposta dinamica
            StringBuilder messaggioSuccesso = new StringBuilder("Operazione massiva completata.");
            if (doModificaAnagrafica) {
                messaggioSuccesso.append(" Tessere modificate anagraficamente: ").append(contatoreModificateAnagrafica).append(".");
            }
            if (doInvalida) {
                messaggioSuccesso.append(" Tessere invalidate: ").append(contatoreInvalidate).append(".");
                if (contatoreAccorciate > 0) {
                    messaggioSuccesso.append(" Attenzione: ").append(contatoreAccorciate).append(" assegnazioni in corso anticipate alla data di indisponibilità.");
                }
            }

            ResponseUtil.sendOkNoData(response, messaggioSuccesso.toString().trim());
            System.out.println("[ModificaTessereMassivoServlet] <<< Completato con successo");

        } catch (IllegalArgumentException ie) {
            // Errori di logica di business (paradosso temporale, vincoli) -> 400 Bad Request
            System.err.println("[ModificaTessereMassivoServlet] Validazione fallita. Rollback: " + ie.getMessage());
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, ie.getMessage());
        } catch (Exception e) {
            // Errori SQL o imprevisti -> 500 Internal Server Error
            System.err.println("[ModificaTessereMassivoServlet] Errore critico. Rollback: " + e.getMessage());
            e.printStackTrace();
            eseguiRollback(conn);
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il processo massivo: " + e.getMessage());
        } finally {
            if (conn != null) {
                try {
                    conn.setAutoCommit(true);
                    conn.close();
                } catch (SQLException ex) {
                    System.err.println("Errore in chiusura connessione: " + ex.getMessage());
                }
            }
        }
    }

    // --- Metodi di utilità locali ---
    
    private void eseguiRollback(Connection conn) {
        if (conn != null) {
            try {
                conn.rollback();
            } catch (SQLException ex) {
                System.err.println("Errore fatale durante il rollback: " + ex.getMessage());
            }
        }
    }

    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) { props.load(is); return props; }
        } catch (Exception e) {}
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