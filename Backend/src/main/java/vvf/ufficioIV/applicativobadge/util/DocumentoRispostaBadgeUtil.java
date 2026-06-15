package vvf.ufficioIV.applicativobadge.util;

import vvf.ufficioIV.applicativobadge.dto.RichiestaBadgeDTO;
import vvf.ufficioIV.applicativobadge.dto.NominativoDTO;
import org.apache.poi.xwpf.usermodel.*;
import fr.opensagres.poi.xwpf.converter.pdf.PdfConverter;
import fr.opensagres.poi.xwpf.converter.pdf.PdfOptions;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

public class DocumentoRispostaBadgeUtil {

    // ── METODI PUBBLICI ───────────────────────────────────────────────────────

    /**
     * Genera il documento e lo esporta in formato Word (.docx)
     */
    public static void generaEdEsportaDocumento(RichiestaBadgeDTO dto, String alAlla, String codesto, boolean isMultiplo, OutputStream out) throws Exception {
        try (XWPFDocument document = compilaDocumentoWord(dto, alAlla, codesto, isMultiplo)) {
            document.write(out);
        }
    }

    /**
     * Genera il documento in memoria, lo converte e lo esporta in formato PDF (.pdf)
     */
    public static void generaEdEsportaPdf(RichiestaBadgeDTO dto, String alAlla, String codesto, boolean isMultiplo, OutputStream out) throws Exception {
        try (XWPFDocument document = compilaDocumentoWord(dto, alAlla, codesto, isMultiplo)) {
            // Usa Opensagres per la conversione al volo in PDF
            PdfOptions options = PdfOptions.create();
            PdfConverter.getInstance().convert(document, out, options);
        }
    }

    // ── METODO PRIVATO CONDIVISO (IL MOTORE) ──────────────────────────────────

    /**
     * Logica core per leggere il template e compilare il Word in memoria.
     */
    private static XWPFDocument compilaDocumentoWord(RichiestaBadgeDTO dto, String alAlla, String codesto, boolean isMultiplo) throws Exception {
        String templateName = isMultiplo ? "/MULTIPLO.docx" : "/SINGOLO.docx"; 
        
        InputStream is = DocumentoRispostaBadgeUtil.class.getResourceAsStream(templateName);
        if (is == null) {
            throw new RuntimeException("Template Word non trovato al percorso: " + templateName);
        }

        XWPFDocument document = new XWPFDocument(is);

        // 1. Sostituzione dei campi fissi nei paragrafi
        for (XWPFParagraph p : document.getParagraphs()) {
            sostituisciTestoNelParagrafo(p, "$AL_ALLA$", alAlla);
            sostituisciTestoNelParagrafo(p, "$NOME_SEDE$", dto.getDescrizioneSede());
            sostituisciTestoNelParagrafo(p, "$OGGETTO_MAIL$", dto.getOggettoMail());
            sostituisciTestoNelParagrafo(p, "$CODESTO_A$", codesto);
            sostituisciTestoNelParagrafo(p, "$NR_PROTOCOLLO$", dto.getNrProtocollo());
            sostituisciTestoNelParagrafo(p, "$DATA_PROTOCOLLO$", dto.getData());
            
            if (isMultiplo) {
                int numBadge = dto.getNominativi().size();
                sostituisciTestoNelParagrafo(p, "$NUM_BADGE$", String.valueOf(numBadge));
                sostituisciTestoNelParagrafo(p, "$NUM_BADGE_LETTERE$", convertiNumeroInLettere(numBadge));
            }
        }

        // 2. Sostituzione dei campi fissi nelle tabelle
        for (XWPFTable tbl : document.getTables()) {
            for (XWPFTableRow row : tbl.getRows()) {
                for (XWPFTableCell cell : row.getTableCells()) {
                    for (XWPFParagraph p : cell.getParagraphs()) {
                        sostituisciTestoNelParagrafo(p, "$AL_ALLA$", alAlla);
                        sostituisciTestoNelParagrafo(p, "$NOME_SEDE$", dto.getDescrizioneSede());
                    }
                }
            }
        }

        // 3. Inserimento dei nominativi (gestione degli "a capo")
        inserisciBloccoNominativi(document, "$BLOCCO_NOMINATIVI$", dto.getNominativi(), isMultiplo);

        return document;
    }

    // ── METODI PRIVATI DI SUPPORTO ──────────────────────────────────────────

    /**
     * Sostituisce una stringa target con una stringa di rimpiazzo all'interno di un singolo paragrafo.
     * Risolve il problema dei Run frammentati e l'eccezione XmlValueDisconnectedException.
     */
    private static void sostituisciTestoNelParagrafo(XWPFParagraph p, String target, String replacement) {
        if (replacement == null) replacement = "";
        
        String paragraphText = p.getText();
        if (paragraphText != null && paragraphText.contains(target)) {
            
            // 1. Estraiamo le proprietà del font in variabili base PRIMA di cancellare i run
            String fontFamily = null;
            Integer fontSize = null; // Usiamo Integer invece di Double per POI 4.1.2
            boolean isBold = false;
            boolean isItalic = false;

            if (!p.getRuns().isEmpty()) {
                XWPFRun primoRun = p.getRuns().get(0);
                fontFamily = primoRun.getFontFamily();
                
                // In POI 4.1.2 usiamo getFontSize() che restituisce un int (-1 se non impostato)
                int size = primoRun.getFontSize();
                if (size != -1) {
                    fontSize = size;
                }
                
                isBold = primoRun.isBold();
                isItalic = primoRun.isItalic();
            }

            // 2. Calcoliamo il nuovo testo
            String nuovoTesto = paragraphText.replace(target, replacement);
            
            // 3. Ora possiamo cancellare in sicurezza i vecchi run
            for (int i = p.getRuns().size() - 1; i >= 0; i--) {
                p.removeRun(i);
            }
            
            // 4. Creiamo il nuovo run e applichiamo le proprietà lette in precedenza
            XWPFRun nuovoRun = p.createRun();
            nuovoRun.setText(nuovoTesto);
            
            if (fontFamily != null) {
                nuovoRun.setFontFamily(fontFamily);
            }
            if (fontSize != null) {
                nuovoRun.setFontSize(fontSize); // Ora prende un Integer (int), corretto per POI 4
            }
            nuovoRun.setBold(isBold);
            nuovoRun.setItalic(isItalic);
        }
    }

    /**
     * Cerca il placeholder dei nominativi e lo sostituisce riga per riga.
     */
    private static void inserisciBloccoNominativi(XWPFDocument document, String target, List<NominativoDTO> nominativi, boolean isMultiplo) {
        for (XWPFParagraph p : document.getParagraphs()) {
            String text = p.getText();
            if (text != null && text.contains(target)) {
                
                // Puliamo il paragrafo che contiene il tag
                for (int i = p.getRuns().size() - 1; i >= 0; i--) {
                    p.removeRun(i);
                }

                // Generiamo le righe
                for (int i = 0; i < nominativi.size(); i++) {
                    NominativoDTO nom = nominativi.get(i);
                    String riga = formattaNominativo(nom, isMultiplo);
                    
                    XWPFRun run = p.createRun();
                    run.setText(riga);
                    run.setBold(true); // Grassetto per i nomi
                    
                    // Se non è l'ultimo elemento e siamo in un documento multiplo, vai a capo
                    if (isMultiplo && i < nominativi.size() - 1) {
                        run.addBreak();
                    }
                }
                break; // Assumiamo che ci sia un solo blocco nominativi
            }
        }
    }

    /**
     * Formatta il singolo nominativo (aggiunge il trattino se multiplo).
     */
    private static String formattaNominativo(NominativoDTO n, boolean isMultiplo) {
        String base = (n.getCognome() != null ? n.getCognome().toUpperCase() : "") + " " +
                      (n.getNome() != null ? n.getNome().toUpperCase() : "");
                      
        if (n.getCodFis() != null && !n.getCodFis().trim().isEmpty()) {
            base += " - " + n.getCodFis().toUpperCase();
        }
        
        return isMultiplo ? "- " + base.trim() : base.trim();
    }

    
    // Costanti per la conversione dei numeri
    private static final String[] UNITA = {"", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", 
                                           "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"};
    private static final String[] DECINE = {"", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"};

    /**
     * Converte un numero intero nel suo equivalente testuale in lingua italiana (es. 45 -> quarantacinque).
     * Supporta numeri fino a 999.999.
     */
    private static String convertiNumeroInLettere(int n) {
        if (n == 0) {
            return "zero";
        }
        if (n < 0) {
            return "meno " + convertiNumeroInLettere(-n);
        }
        if (n < 20) {
            return UNITA[n];
        }
        if (n < 100) {
            int decina = n / 10;
            int unita = n % 10;
            String prefisso = DECINE[decina];
            
            // Elisione vocale per 1 e 8 (es. ventuno invece di ventiuno, trentotto invece di trentaotto)
            if (unita == 1 || unita == 8) {
                prefisso = prefisso.substring(0, prefisso.length() - 1);
            }
            // Aggiunta corretta dell'accento per i composti del 3 (es. ventitré)
            if (unita == 3) {
                return prefisso + "tré";
            }
            return prefisso + UNITA[unita];
        }
        if (n < 1000) {
            int centinaia = n / 100;
            int resto = n % 100;
            String prefisso = (centinaia == 1) ? "cento" : UNITA[centinaia] + "cento";
            
            // Elisione vocale se il resto inizia con 'o' (es. centottanta, centotto)
            if ((resto >= 80 && resto <= 89) || resto == 8) {
                prefisso = prefisso.substring(0, prefisso.length() - 1);
            }
            return prefisso + (resto == 0 ? "" : convertiNumeroInLettere(resto));
        }
        if (n < 2000) {
            int resto = n % 1000;
            return "mille" + (resto == 0 ? "" : convertiNumeroInLettere(resto));
        }
        if (n < 1000000) {
            int migliaia = n / 1000;
            int resto = n % 1000;
            return convertiNumeroInLettere(migliaia) + "mila" + (resto == 0 ? "" : convertiNumeroInLettere(resto));
        }
        
        // Fallback per numeri oltre il milione (improbabile per richieste badge, ma previene blocchi)
        return String.valueOf(n);
    }
}