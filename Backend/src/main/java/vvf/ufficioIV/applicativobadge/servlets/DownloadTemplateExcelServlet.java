package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * ==========================================================================================
 * API ENDPOINT : /downloadTemplateExcel
 * METODO HTTP  : GET
 * DESCRIZIONE  : Restituisce in download diretto il template Excel per l'import massivo
 *                situato nel classpath (src/main/resources/).
 * ==========================================================================================
 */
@WebServlet("/downloadTemplateExcel")
public class DownloadTemplateExcelServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Assicurati che il nome e l'estensione coincidano esattamente con il file in src/main/resources
    private static final String TEMPLATE_FILE_NAME = "IMPORT_MASSIVO_TEMPLATE.xlsx";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        System.out.println("[DownloadTemplateExcelServlet] >>> Inizio doGet: richiesta download template");

        // 1. Carica il file dal classpath (src/main/resources/)
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        
        try (InputStream inputStream = classLoader.getResourceAsStream(TEMPLATE_FILE_NAME)) {
            
            // Se l'InputStream è null, il file non è stato trovato nella cartella resources
            if (inputStream == null) {
                System.err.println("[DownloadTemplateExcelServlet] Errore: File template non trovato nel classpath.");
                ResponseUtil.sendError(response, HttpServletResponse.SC_NOT_FOUND, "Template Excel non trovato sul server.");
                return;
            }

            // 2. Imposta gli header della response per forzare il download del file Excel
            // Usa "application/vnd.ms-excel" se il file è un vecchio .xls
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + TEMPLATE_FILE_NAME + "\"");

            // 3. Scrivi lo stream di byte verso la response
            try (OutputStream outputStream = response.getOutputStream()) {
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
            }

            System.out.println("[DownloadTemplateExcelServlet] <<< Fine doGet: download completato con successo");

        } catch (Exception e) {
            System.err.println("[DownloadTemplateExcelServlet] Eccezione durante il download: " + e.getMessage());
            e.printStackTrace();
            
            // Se la response non è già stata scritta in parte, restituiamo un JSON di errore
            if (!response.isCommitted()) {
                response.reset();
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante il download del template.");
            }
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // Blocchiamo le richieste POST dato che questo endpoint deve solo restituire un file statico
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint supporta solo richieste GET.");
    }
}