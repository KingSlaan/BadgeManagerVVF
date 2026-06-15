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

        // ── 4. Validazione obbligatori ────────────────────────────────────────
        if (isBlank(descrizioneSede) || isBlank(oggettoMail) || isBlank(nrProtocollo) || isBlank(data) || nominativi.isEmpty()) {
            ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Parametri obbligatori mancanti.");
            return;
        }

        RichiestaBadgeDTO dto = new RichiestaBadgeDTO();
        dto.setDescrizioneSede(descrizioneSede);
        dto.setOggettoMail(oggettoMail);
        dto.setNrProtocollo(nrProtocollo);
        dto.setData(data);
        dto.setNominativi(nominativi);

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

        // ── 6. Generazione e Stream del PDF ───────────────────────────────────
        boolean isMultiplo = nominativi.size() > 1;
        String fileName = isMultiplo ? "Richiesta_Badge_Multipla.pdf" : "Richiesta_Badge_Singola.pdf";

        try {
            // IL CONTENT TYPE CAMBIA: ORA E' UN PDF!
            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

            // Chiamata all'utility per esportare il PDF
            DocumentoRispostaBadgeUtil.generaEdEsportaPdf(
                dto, 
                alAlla, 
                codesto, 
                isMultiplo, 
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