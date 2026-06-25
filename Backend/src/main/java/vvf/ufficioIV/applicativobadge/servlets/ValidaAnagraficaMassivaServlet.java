package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import vvf.ufficioIV.applicativobadge.dao.AnagraficaCodFiscale1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Properties;
import java.util.Set;

/**
 * ==========================================================================================
 * API ENDPOINT : /validaAnagraficaMassiva
 * METODO HTTP  : POST
 * DESCRIZIONE  : Riceve un file Excel (.xlsx), estrae i CF dalla colonna A (da riga 2) e
 *                restituisce i dettagli anagrafici dal DB.
 *                Logica Atomica (All-or-Nothing): Se manca anche un solo CF, abortisce.
 * ==========================================================================================
 */
@WebServlet("/validaAnagraficaMassiva")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024 * 2, // 2 MB (soglia oltre la quale scrive su disco temp)
    maxFileSize = 1024 * 1024 * 10,      // 10 MB (dimensione max del singolo file)
    maxRequestSize = 1024 * 1024 * 15    // 15 MB (dimensione max della request totale)
)
public class ValidaAnagraficaMassivaServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[ValidaAnagraficaMassivaServlet] >>> Inizio elaborazione file Excel");

        // ── 1. Estrazione del File Excel dalla Request ─────────────────────────
        Part filePart;
        try {
            // "file" è il nome del campo input type="file" che il Frontend deve inviare
            filePart = request.getPart("file");
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "File non trovato nella request (atteso parametro form-data 'file').");
            return;
        }

        if (filePart == null || filePart.getSize() == 0) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il file caricato è vuoto o mancante.");
            return;
        }

        // Set (invece di List) per rimuovere in automatico eventuali CF duplicati presenti nell'Excel
        Set<String> codiciFiscaliDaVerificare = new LinkedHashSet<>();
        
        // ── 2. Lettura del file Excel con Apache POI ───────────────────────────
        try (InputStream fileContent = filePart.getInputStream();
             Workbook workbook = new XSSFWorkbook(fileContent)) {
            
            // Prendiamo il primo foglio (indice 0)
            Sheet sheet = workbook.getSheetAt(0);
            
            // Utility di POI per convertire qualsiasi formato di cella in stringa pulita
            DataFormatter formatter = new DataFormatter();

            // Partiamo dalla riga di indice 1 (escludendo la riga 0 che è l'intestazione "CODICE FISCALE")
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    Cell cell = row.getCell(0); // Colonna A (indice 0)
                    if (cell != null) {
                        String cf = formatter.formatCellValue(cell).trim().toUpperCase();
                        if (!cf.isEmpty()) {
                            codiciFiscaliDaVerificare.add(cf);
                        }
                    }
                }
            }
            
        } catch (Exception e) {
            System.err.println("[ValidaAnagraficaMassivaServlet] Errore lettura Excel: " + e.getMessage());
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato file non valido. Assicurati che sia un file .xlsx valido.");
            return;
        }

        if (codiciFiscaliDaVerificare.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il file Excel non contiene alcun Codice Fiscale valido.");
            return;
        }

        // ── 3. Connessione al DataBase ─────────────────────────────────────────
        Properties props = loadDbProps();
        if (props == null) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore Configurazione DB.");
            return;
        }

        Connection conn = null;
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            String dbUrl = "jdbc:oracle:thin:@//" + props.getProperty("db.ip") + ":" + props.getProperty("db.port") + "/" + props.getProperty("db.name");
            conn = DriverManager.getConnection(dbUrl, props.getProperty("db.user"), props.getProperty("db.password"));
            
            AnagraficaCodFiscale1DAOJDBCImpl daoAnagrafica = new AnagraficaCodFiscale1DAOJDBCImpl(conn);

            List<AnagraficaCodFiscale> validati = new ArrayList<>();
            List<String> cfMancanti = new ArrayList<>();

            // ── 4. Controllo Atomico dei Dati ──────────────────────────────────
            for (String cf : codiciFiscaliDaVerificare) {
                AnagraficaCodFiscale anagrafica = daoAnagrafica.getByCodFiscale(cf);
                
                if (anagrafica == null) {
                    // CF non trovato nel DB
                    cfMancanti.add(cf);
                } else {
                    // CF trovato, salvo i dettagli
                    validati.add(anagrafica);
                }
            }

            // ── 5. REGOLA ATOMICA: Fallimento o Successo ───────────────────────
            // Se la lista dei mancanti NON è vuota, blocca tutto e restituisci l'errore
            if (!cfMancanti.isEmpty()) {
                String listaMancanti = String.join(", ", cfMancanti);
                String msgErrore = "Operazione interrotta. I seguenti Codici Fiscali non sono censiti in anagrafica: " + listaMancanti;
                
                System.out.println("[ValidaAnagraficaMassivaServlet] Fallimento atomico: " + cfMancanti.size() + " CF mancanti.");
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, msgErrore);
                return; // Non restituiamo alcun dato parziale al FE
            }

            // Se arriviamo qui, TUTTI i CF sono validi. Mandiamo al frontend l'array JSON completo
            System.out.println("[ValidaAnagraficaMassivaServlet] <<< Elaborazione completata con successo.");
            ResponseUtil.sendOk(response, "File elaborato con successo. Tutti i codici fiscali sono stati validati.", validati);

        } catch (Exception e) {
            System.err.println("[ValidaAnagraficaMassivaServlet] Errore DB: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il controllo in anagrafica: " + e.getMessage());
        } finally {
            if (conn != null) {
                try { conn.close(); } 
                catch (SQLException ex) { System.err.println("Errore in chiusura connessione: " + ex.getMessage()); }
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste POST.");
    }

    // --- Metodi di utilità locali ---
    private Properties loadDbProps() {
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is != null) { props.load(is); return props; }
        } catch (Exception e) {}
        return null;
    }
}