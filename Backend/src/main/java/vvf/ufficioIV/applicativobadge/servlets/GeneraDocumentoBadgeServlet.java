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
 * API ENDPOINT : /generaDocumentoBadgeServlet
 * METODO HTTP  : POST
 * DESCRIZIONE  : Genera e restituisce in download diretto un file .docx (Singolo o Multiplo)
 * compilato con i dati forniti dal frontend.
 * ==========================================================================================
 */
@WebServlet("/generaDocumentoBadgeServlet")
public class GeneraDocumentoBadgeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("[generaDocumentoBadgeServlet] >>> Inizio doPost");

        // ── 1. Leggi body JSON ────────────────────────────────────────────────
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
        }
        String bodyJson = sb.toString();
        System.out.println("[generaDocumentoBadgeServlet] Body ricevuto: " + bodyJson);

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
        
        List<NominativoDTO> nominativi = new ArrayList<>();
        if (json.has("nominativi") && json.get("nominativi").isJsonArray()) {
            JsonArray array = json.get("nominativi").getAsJsonArray();
            for (JsonElement el : array) {
                JsonObject nomJson = el.getAsJsonObject();
                NominativoDTO nomDTO = new NominativoDTO();
                nomDTO.setCognome(getStringSafe(nomJson, "cognome"));
                nomDTO.setNome(getStringSafe(nomJson, "nome"));
                nomDTO.setCodFis(getStringSafe(nomJson, "codFis")); // Può essere null/vuoto essendo opzionale
                nominativi.add(nomDTO);
            }
        }

        System.out.println("[generaDocumentoBadgeServlet] Parametri ricevuti:");
        System.out.println("  descrizioneSede = " + descrizioneSede);
        System.out.println("  oggettoMail     = " + oggettoMail);
        System.out.println("  nrProtocollo    = " + nrProtocollo);
        System.out.println("  data            = " + data);
        System.out.println("  nominativi size = " + nominativi.size());

        // ── 4. Validazione obbligatori ────────────────────────────────────────
        if (isBlank(descrizioneSede) || isBlank(oggettoMail) || isBlank(nrProtocollo) || isBlank(data) || nominativi.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti o lista nominativi vuota.");
            return;
        }

        // Popoliamo il DTO per passarlo comodamente all'Utility
        RichiestaBadgeDTO dto = new RichiestaBadgeDTO();
        dto.setDescrizioneSede(descrizioneSede);
        dto.setOggettoMail(oggettoMail);
        dto.setNrProtocollo(nrProtocollo);
        dto.setData(data);
        dto.setNominativi(nominativi);

        // ── 5. Logica di Business Sede (Comando vs Direzione) ─────────────────
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
        boolean isMultiplo = nominativi.size() > 1;
        String fileName = isMultiplo ? "Richiesta_Badge_Multipla.docx" : "Richiesta_Badge_Singola.docx";

        try {
            // Impostiamo l'header PRIMA di scrivere sull'output stream
            response.setContentType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

            // Chiamata all'utility per la generazione con Apache POI
            DocumentoRispostaBadgeUtil.generaEdEsportaDocumento(
                dto, 
                alAlla, 
                codesto, 
                isMultiplo, 
                response.getOutputStream() // Flusso diretto al browser
            );

            System.out.println("[generaDocumentoBadgeServlet] >>> Fine doPost con successo (File scaricato).");

        } catch (Exception e) {
            System.err.println("[generaDocumentoBadgeServlet] Eccezione durante la generazione del DOCX: " + e.getMessage());
            e.printStackTrace();
            
            // Se c'è un errore e non abbiamo ancora committato la response, possiamo provare a inviare un JSON di errore
            if (!response.isCommitted()) {
                response.reset(); // Resetta gli header del file
                ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Errore interno durante la generazione del documento.");
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Endpoint supporta solo POST.");
    }

    // ── Utility Interne ───────────────────────────────────────────────────────

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