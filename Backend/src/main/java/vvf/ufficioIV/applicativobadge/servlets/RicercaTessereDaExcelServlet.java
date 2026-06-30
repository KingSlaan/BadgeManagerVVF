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

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAO;
import vvf.ufficioIV.applicativobadge.dao.RicercaTessereDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Properties;
import java.util.Set;

/**
 * ==========================================================================================
 * API ENDPOINT : /ricercaTessereDaExcel
 * METODO HTTP  : POST
 * DESCRIZIONE  : Riceve un file Excel (.xlsx), estrae i CF dalla colonna A (da riga 2) e
 * restituisce i dettagli delle tessere associate. 
 * Non utilizza la paginazione in risposta (restituisce tutti i dati uniti).
 * ==========================================================================================
 * 📥 REQUEST (Form-Data)
 * ------------------------------------------------------------------------------------------
 * Content-Type : multipart/form-data
 * Parametri    : 
 * - "file": Il file .xlsx contenente i Codici Fiscali
 * * 📤 RESPONSE OK (Casi di successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * {
 * "esito": "OK",
 * "messaggio": "Ricerca completata (X tessere trovate).",
 * "data": [ { ... TesseraFiltroDTO ... }, ... ]
 * }
 * ==========================================================================================
 */
@WebServlet("/ricercaTessereDaExcel")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024 * 2, // 2 MB
    maxFileSize = 1024 * 1024 * 10,      // 10 MB
    maxRequestSize = 1024 * 1024 * 15    // 15 MB
)
public class RicercaTessereDaExcelServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("[RicercaTessereDaExcelServlet] >>> Inizio elaborazione file Excel");

        // ── 1. Estrazione del File Excel dalla Request ─────────────────────────
        Part filePart;
        try {
            filePart = request.getPart("file");
        } catch (Exception e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "File non trovato nella request (atteso parametro 'file').");
            return;
        }

        if (filePart == null || filePart.getSize() == 0) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il file caricato è vuoto o mancante.");
            return;
        }

        Set<String> codiciFiscaliDaVerificare = new LinkedHashSet<>();
        
        // ── 2. Lettura del file Excel con Apache POI ───────────────────────────
        try (InputStream fileContent = filePart.getInputStream();
             Workbook workbook = new XSSFWorkbook(fileContent)) {
            
            Sheet sheet = workbook.getSheetAt(0);
            DataFormatter formatter = new DataFormatter();

            // Escludiamo la riga di intestazione (indice 0)
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    Cell cell = row.getCell(0); // Colonna A
                    if (cell != null) {
                        String cf = formatter.formatCellValue(cell).trim().toUpperCase();
                        if (!cf.isEmpty()) {
                            codiciFiscaliDaVerificare.add(cf);
                        }
                    }
                }
            }
            
        } catch (Exception e) {
            System.err.println("[RicercaTessereDaExcelServlet] Errore lettura Excel: " + e.getMessage());
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato file non valido. Assicurati che sia un file .xlsx.");
            return;
        }

        if (codiciFiscaliDaVerificare.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il file Excel non contiene alcun Codice Fiscale valido.");
            return;
        }

        // ── 3. Caricamento credenziali DB ──────────────────────────────────────
        Properties props = new Properties();
        try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
            if (is == null) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "File configurazione DB non trovato.");
                return;
            }
            props.load(is);
        }

        String ip   = props.getProperty("db.ip");
        String port = props.getProperty("db.port");
        String db   = props.getProperty("db.name");
        String user = props.getProperty("db.user");
        String pwd  = props.getProperty("db.password");

        RicercaTessereDAO dao = new RicercaTessereDAOJDBCImpl(ip, port, db, user, pwd);
        List<TesseraFiltroDTO> tuttiIRisultati = new ArrayList<>();

        // ── 4. Generazione Filtri Dinamici e Chiamata DAO ──────────────────────
        try {
            // Trasformo il Set in List per poterlo partizionare
            List<String> cfList = new ArrayList<>(codiciFiscaliDaVerificare);
            
            // Oracle supporta max 1000 elementi nella clausola IN.
            // Dividiamo i Codici Fiscali in "lotti" (batch) da massimo 999 elementi.
            int batchSize = 999;
            
            for (int i = 0; i < cfList.size(); i += batchSize) {
                // Estraggo la porzione (sublist)
                List<String> batch = cfList.subList(i, Math.min(i + batchSize, cfList.size()));

                // Costruisco l'array per la chiamata al DAO
                JsonArray valuesArray = new JsonArray();
                for (String cf : batch) {
                    valuesArray.add(cf);
                }

                JsonObject filter = new JsonObject();
                filter.addProperty("field", "codiceFiscale");
                filter.addProperty("operator", "in");
                filter.add("value", valuesArray);

                JsonArray filters = new JsonArray();
                filters.add(filter);

                // Disabilito la paginazione passando Integer.MAX_VALUE come dimensione pagina
                List<TesseraFiltroDTO> risultatiBatch = dao.getTessereByFilters(filters, 1, Integer.MAX_VALUE,null);
                tuttiIRisultati.addAll(risultatiBatch);
            }

            // ── 5. Risposta OK SENZA Paginazione ────────────────────────────────
            System.out.println("[RicercaTessereDaExcelServlet] <<< Elaborazione completata. Risultati trovati: " + tuttiIRisultati.size());
            ResponseUtil.sendOk(
                response, 
                "Ricerca completata (" + tuttiIRisultati.size() + " tessere trovate).", 
                tuttiIRisultati
            );

        } catch (Exception e) {
            System.err.println("[RicercaTessereDaExcelServlet] Errore interno: " + e.getMessage());
            e.printStackTrace();
            ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il caricamento dei dati: " + e.getMessage());
        } finally {
            dao.closeConnection();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste POST.");
    }
}
