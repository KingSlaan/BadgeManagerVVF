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

import vvf.ufficioIV.applicativobadge.dto.RichiestaBadgeDTO;
import vvf.ufficioIV.applicativobadge.dto.NominativoDTO;
import vvf.ufficioIV.applicativobadge.util.DocumentoRispostaBadgeUtil;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ==========================================================================================
 * API ENDPOINT : /generaPdfBadgeServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Genera e restituisce in download diretto un file .pdf compilato.
 * ==========================================================================================
 */
@WebServlet("/generaPdfBadgeServlet")
public class GeneraPdfBadgeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[generaPdfBadgeServlet] >>> Inizio doPost");

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();

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
        String descrizioneSede = getStringSafe(json, "descrizioneSede");
        String oggettoMail     = getStringSafe(json, "oggettoMail");
        String nrProtocollo    = getStringSafe(json, "nrProtocollo");
        String data            = getStringSafe(json, "data");
        
     // NUOVO MODO (Legge sia stringhe che booleani/numeri in sicurezza)
        boolean isSostitutiva = false;
        if (json.has("isSostitutiva") && !json.get("isSostitutiva").isJsonNull()) {
            String val = json.get("isSostitutiva").getAsString(); // Legge come stringa per sicurezza
            isSostitutiva = "true".equalsIgnoreCase(val) || "1".equals(val);
        }

        int numeroBadge = 0;
        if (json.has("numeroBadge") && !json.get("numeroBadge").isJsonNull()) {
            try {
                numeroBadge = Integer.parseInt(json.get("numeroBadge").getAsString());
            } catch (NumberFormatException e) {
                numeroBadge = 0;
            }
        }
        
        List<NominativoDTO> nominativi = new ArrayList<>();
        if (json.has("nominativi") && json.get("nominativi").isJsonArray()) {
            JsonArray array = json.get("nominativi").getAsJsonArray();
            for (JsonElement el : array) {
                JsonObject nomJson = el.getAsJsonObject();
                NominativoDTO nomDTO = new NominativoDTO();
                nomDTO.setCognome(getStringSafe(nomJson, "cognome"));
                nomDTO.setNome(getStringSafe(nomJson, "nome"));
                nomDTO.setCodFis(getStringSafe(nomJson, "codFis"));
                nominativi.add(nomDTO);
            }
        }

        System.out.println("[generaDocumentoBadgeServlet] Parametri ricevuti:");
        System.out.println("  descrizioneSede = " + descrizioneSede);
        System.out.println("  oggettoMail     = " + oggettoMail);
        System.out.println("  nrProtocollo    = " + nrProtocollo);
        System.out.println("  data            = " + data);
        System.out.println("  nominativi size = " + nominativi.size());

        
        // ── 4. Validazione intelligente ───────────────────────────────────────
        if (isBlank(descrizioneSede) || isBlank(oggettoMail) || isBlank(nrProtocollo) || isBlank(data)) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }
        
        // Controllo differenziato tra standard e sostitutiva
        if (!isSostitutiva && nominativi.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Lista nominativi vuota per una richiesta standard.");
            return;
        }
        if (isSostitutiva && numeroBadge <= 0) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Numero badge non valido per una richiesta sostitutiva.");
            return;
        }

        RichiestaBadgeDTO dto = new RichiestaBadgeDTO();
        dto.setDescrizioneSede(descrizioneSede);
        dto.setOggettoMail(oggettoMail);
        dto.setNrProtocollo(nrProtocollo);
        dto.setData(data);
        dto.setNominativi(nominativi);
        dto.setSostitutiva(isSostitutiva);
        dto.setNumeroBadge(numeroBadge);
        
        
        // ── 5. Logica di Business Sede ────────────────────────────────────────
        String descSedeUpper = descrizioneSede.toUpperCase();
        String alAlla = "Al/Alla"; 
        String codesto = "codesto/a";

        if (descSedeUpper.contains("COMANDO")) {
            alAlla = "Al";
            codesto = "codesto Comando";
        } else if (descSedeUpper.contains("DIREZIONE")) {
            alAlla = "Alla";
            codesto = "codesta Direzione";
        }
        

        // ── 6. Generazione e Stream del Documento ─────────────────────────────
        String fileName = isSostitutiva ? "Richiesta_Badge_Sostitutiva" : (nominativi.size() > 1 ? "Richiesta_Badge_Multipla" : "Richiesta_Badge_Singola");
        fileName += ".docx"; // ".pdf" in GeneraPdfBadgeServlet
        
        try {
            // Impostiamo l'header PRIMA di scrivere sull'output stream
            response.setContentType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

            // Chiamata all'utility per la generazione con Apache POI
            DocumentoRispostaBadgeUtil.generaEdEsportaDocumento( // o generaEdEsportaPdf
                    dto, 
                    alAlla, 
                    codesto, 
                    response.getOutputStream()
                );

            System.out.println("[generaPdfBadgeServlet] >>> Fine doPost con successo (PDF scaricato).");

        } catch (Exception e) {
            System.err.println("[generaPdfBadgeServlet] Eccezione: " + e.getMessage());
            e.printStackTrace();
            if (!response.isCommitted()) {
                response.reset();
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante la generazione del PDF.");
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Endpoint supporta solo POST.");
    }

    private String getStringSafe(JsonObject json, String key) {
        try {
            return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null;
        } catch (Exception e) { return null; }
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}