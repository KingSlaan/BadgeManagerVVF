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

import vvf.ufficioIV.applicativobadge.dto.NominativoDTO;
import vvf.ufficioIV.applicativobadge.util.DocumentoRispostaBadgeUtil;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ==========================================================================================
 * API ENDPOINT : /stampaBadgeServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Riceve una lista di nominativi JSON e restituisce un pdf/word
 * ottimizzato millimetricamente per la stampante badge HID FARGO C50.
 * ==========================================================================================
 */
@WebServlet("/stampaBadgeServlet")
public class StampaBadgeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[StampaBadgeServlet] >>> Inizio elaborazione stampa massiva...");

        // 1. Lettura del Body JSON inviato da Angular
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }
        String bodyJson = sb.toString();

        if (bodyJson == null || bodyJson.trim().isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Lista nominativi vuota o mancante.");
            return;
        }

        // 2. Parsing del JSON Array dei nominativi
        List<NominativoDTO> nominativi = new ArrayList<>();
        try {
            JsonElement jsonElement = JsonParser.parseString(bodyJson);
            if (!jsonElement.isJsonArray()) {
                ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Il body deve contenere un array JSON di nominativi.");
                return;
            }
            
            JsonArray array = jsonElement.getAsJsonArray();
            for (JsonElement el : array) {
                JsonObject obj = el.getAsJsonObject();
                NominativoDTO nom = new NominativoDTO();
                nom.setCognome(obj.has("cognome") && !obj.get("cognome").isJsonNull() ? obj.get("cognome").getAsString() : "");
                nom.setNome(obj.has("nome") && !obj.get("nome").isJsonNull() ? obj.get("nome").getAsString() : "");
                nominativi.add(nom);
            }
        } catch (JsonSyntaxException | IllegalStateException e) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Formato JSON non valido.");
            return;
        }

        System.out.println("[StampaBadgeServlet] Tessere da generare totali: " + nominativi.size());

        if (nominativi.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Nessun nominativo selezionato per la stampa.");
            return;
        }

        // 3. Generazione del PDF e Stream verso il Client
        try {
        	
        	/* VERSIONE PDF - COMMENTARE/SCOMMENTARE*/
            // Impostiamo il content type come PDF e l'apertura "inline" per attivare la dialog di stampa del browser
            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "inline; filename=\"Stampa_Badge_Massiva.pdf\"");
			
        	
        	/*VERSIONE DOCX
            // Indica che è un file Word (.docx) e forza il download
            response.setContentType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
            response.setHeader("Content-Disposition", "attachment; filename=\"Stampa_Badge_Massiva.docx\"");
            */
            
            DocumentoRispostaBadgeUtil.generaStampaMassiva(nominativi, response.getOutputStream());
            
            System.out.println("[StampaBadgeServlet] >>> Generazione PDF completata con successo.");

        } catch (Exception e) {
            System.err.println("[StampaBadgeServlet] Errore critico durante la stampa: " + e.getMessage());
            e.printStackTrace();
            
            if (!response.isCommitted()) {
                response.reset();
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Impossibile generare il flusso di stampa.");
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "L'endpoint accetta solo richieste in POST.");
    }
}