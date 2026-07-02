package vvf.ufficioIV.applicativobadge.util;

import vvf.ufficioIV.applicativobadge.dto.RichiestaBadgeDTO;
import vvf.ufficioIV.applicativobadge.dto.NominativoDTO;
import org.apache.poi.xwpf.usermodel.*;
import fr.opensagres.poi.xwpf.converter.pdf.PdfConverter;
import fr.opensagres.poi.xwpf.converter.pdf.PdfOptions;
import org.apache.poi.xwpf.usermodel.BreakType;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.ByteArrayInputStream;
import java.util.List;


public class DocumentoRispostaBadgeUtil {

	// ── METODI PUBBLICI ───────────────────────────────────────────────────────
    public static void generaEdEsportaDocumento(RichiestaBadgeDTO dto, String alAlla, String codesto, OutputStream out) throws Exception {
        try (XWPFDocument document = compilaDocumentoWord(dto, alAlla, codesto)) {
            document.write(out);
        }
    }

    public static void generaEdEsportaPdf(RichiestaBadgeDTO dto, String alAlla, String codesto, OutputStream out) throws Exception {
        try (XWPFDocument document = compilaDocumentoWord(dto, alAlla, codesto)) {
            PdfOptions options = PdfOptions.create();
            PdfConverter.getInstance().convert(document, out, options);
        }
    }

    // ── IL MOTORE PRIVATO AGGIORNATO ──────────────────────────────────────────
    private static XWPFDocument compilaDocumentoWord(RichiestaBadgeDTO dto, String alAlla, String codesto) throws Exception {
        
        // 1. Capiamo in che scenario ci troviamo
        boolean isSostitutiva = dto.isSostitutiva();
        boolean isMultiplo = !isSostitutiva && dto.getNominativi() != null && dto.getNominativi().size() > 1;

        // 2. Scelta dinamica del template
        String templateName = isSostitutiva ? "/SOSTITUTIVO.docx" : (isMultiplo ? "/MULTIPLO.docx" : "/SINGOLO.docx"); 
        
        InputStream is = DocumentoRispostaBadgeUtil.class.getResourceAsStream(templateName);
        if (is == null) {
            throw new RuntimeException("Template Word non trovato al percorso: " + templateName);
        }

        XWPFDocument document = new XWPFDocument(is);

        // 3. Calcolo del numero dei badge e sostituzione nei paragrafi
        int conteggioBadge = isSostitutiva ? dto.getNumeroBadge() : (dto.getNominativi() != null ? dto.getNominativi().size() : 0);

        for (XWPFParagraph p : document.getParagraphs()) {
            sostituisciTestoNelParagrafo(p, "$AL_ALLA$", alAlla);
            sostituisciTestoNelParagrafo(p, "$NOME_SEDE$", dto.getDescrizioneSede());
            sostituisciTestoNelParagrafo(p, "$OGGETTO_MAIL$", dto.getOggettoMail());
            sostituisciTestoNelParagrafo(p, "$CODESTO_A$", codesto);
            sostituisciTestoNelParagrafo(p, "$NR_PROTOCOLLO$", dto.getNrProtocollo());
            sostituisciTestoNelParagrafo(p, "$DATA_PROTOCOLLO$", dto.getData());
            
            // Sostituiamo i tag numerici se esistono (su SOSTITUTIVO o MULTIPLO)
            sostituisciTestoNelParagrafo(p, "$NUM_BADGE$", String.valueOf(conteggioBadge));
            sostituisciTestoNelParagrafo(p, "$NUM_BADGE_LETTERE$", convertiNumeroInLettere(conteggioBadge));
        }

        // 4. Sostituzione dei campi fissi nelle tabelle (Header)
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

        // 5. Inserimento blocco nominativi (SOLO SE NON È SOSTITUTIVA)
        if (!isSostitutiva && dto.getNominativi() != null && !dto.getNominativi().isEmpty()) {
            inserisciBloccoNominativi(document, "$BLOCCO_NOMINATIVI$", dto.getNominativi(), isMultiplo);
        }

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
    
    
  //------------
    //STAMPA BADGE
    //-----------
    /**
     * Genera un unico file (PDF o DOCX) contenente n pagine (una per ogni badge).
     */
    public static void generaStampaMassiva(List<NominativoDTO> nominativi, OutputStream out, boolean isWord) throws Exception {
        String templateName = "/STAMPA_TEMPLATE.docx";
        
        // 1. Carichiamo il template in memoria
        byte[] templateBytes;
        try (InputStream is = DocumentoRispostaBadgeUtil.class.getResourceAsStream(templateName)) {
            if (is == null) {
                throw new RuntimeException("Template di stampa badge non trovato al percorso: " + templateName);
            }
            templateBytes = org.apache.poi.util.IOUtils.toByteArray(is);
        }

        if (nominativi == null || nominativi.isEmpty()) {
            return;
        }

        // 2. Apriamo il Master Document e compiliamo il PRIMO dipendente
        XWPFDocument masterDoc = new XWPFDocument(new ByteArrayInputStream(templateBytes));
        NominativoDTO primo = nominativi.get(0);
        String cognomePrimo = primo.getCognome() != null ? primo.getCognome().toUpperCase() : "";
        String nomePrimo = primo.getNome() != null ? primo.getNome().toUpperCase() : "";
        
        for (XWPFParagraph p : masterDoc.getParagraphs()) {
            sostituisciTestoNelParagrafo(p, "$COGNOME$", cognomePrimo);
            sostituisciTestoNelParagrafo(p, "$NOME$", nomePrimo);
            
            // MIRACOLO: Applica il grassetto SOLO ai dati e pulisce le etichette
            applicaGrassettoAlDato(p, cognomePrimo);
            applicaGrassettoAlDato(p, nomePrimo);
        }
        
        // 3. Compiliamo dal SECONDO dipendente in poi
        for (int i = 1; i < nominativi.size(); i++) {
            NominativoDTO dip = nominativi.get(i);
            String cognomeTxt = dip.getCognome() != null ? dip.getCognome().toUpperCase() : "";
            String nomeTxt = dip.getNome() != null ? dip.getNome().toUpperCase() : "";
            
            List<XWPFParagraph> masterParagraphs = masterDoc.getParagraphs();
            if (!masterParagraphs.isEmpty()) {
                masterParagraphs.get(masterParagraphs.size() - 1).createRun().addBreak(BreakType.PAGE);
            }
            
            try (XWPFDocument tempDoc = new XWPFDocument(new ByteArrayInputStream(templateBytes))) {
                for (XWPFParagraph srcP : tempDoc.getParagraphs()) {
                    sostituisciTestoNelParagrafo(srcP, "$COGNOME$", cognomeTxt);
                    sostituisciTestoNelParagrafo(srcP, "$NOME$", nomeTxt);
                    
                    // MIRACOLO: Applica il grassetto SOLO ai dati e pulisce le etichette
                    applicaGrassettoAlDato(srcP, cognomeTxt);
                    applicaGrassettoAlDato(srcP, nomeTxt);
                    
                    XWPFParagraph newP = masterDoc.createParagraph();
                    if (srcP.getCTP().getPPr() != null) {
                        newP.getCTP().setPPr((org.openxmlformats.schemas.wordprocessingml.x2006.main.CTPPr) srcP.getCTP().getPPr().copy());
                    }
                    
                    for (XWPFRun srcRun : srcP.getRuns()) {
                        XWPFRun newRun = newP.createRun();
                        newRun.getCTR().set(srcRun.getCTR().copy());
                        // Nota: Ho rimosso il "newRun.setBold(true)" forzato che avevamo messo prima!
                    }
                }
            }
        }
        
        // 4. Esportazione finale dinamica
        if (isWord) {
            // Salva direttamente il documento Word unito nell'OutputStream
            masterDoc.write(out);
        } else {
            // Converte in PDF
            fr.opensagres.poi.xwpf.converter.pdf.PdfOptions options = fr.opensagres.poi.xwpf.converter.pdf.PdfOptions.create();
            fr.opensagres.poi.xwpf.converter.pdf.PdfConverter.getInstance().convert(masterDoc, out, options);
        }
        
        masterDoc.close();
    }
    

    /**
     * Metodo di supporto che "spezza" dinamicamente le righe: isola il dato 
     * (es. "MARIO") mettendolo in GRASSETTO e in "ARIAL BLACK", assicurando che 
     * l'etichetta (es. "Nome: ") sia in testo Arial normale.
     */
    private static void applicaGrassettoAlDato(XWPFParagraph p, String valoreDaCercare) {
        if (valoreDaCercare == null || valoreDaCercare.trim().isEmpty()) return;
        
        for (int i = 0; i < p.getRuns().size(); i++) {
            XWPFRun run = p.getRuns().get(i);
            String text = run.getText(0);
            
            if (text != null && text.contains(valoreDaCercare)) {
                if (text.equals(valoreDaCercare)) {
                    // Se la riga contiene ESATTAMENTE solo il valore, forziamo Bold e Arial Black
                    run.setBold(true);
                    run.setFontFamily("Arial Black");
                } else {
                    // Se la riga è mista (es: "Nome: MARIO"), la splittiamo matematicamente
                    int index = text.indexOf(valoreDaCercare);
                    String primaParte = text.substring(0, index);
                    String dopoParte = text.substring(index + valoreDaCercare.length());
                    
                    // 1. Reimposta la prima parte (l'etichetta "Nome: ") togliendo il grassetto e lasciando Arial standard
                    run.setText(primaParte, 0);
                    run.setBold(false);
                    
                    // 2. Crea un nuovo blocco ESCLUSIVO per il dato applicando Bold e Arial Black
                    XWPFRun boldRun = p.insertNewRun(i + 1);
                    boldRun.getCTR().set(run.getCTR().copy());
                    boldRun.setText(valoreDaCercare, 0);
                    boldRun.setBold(true);
                    boldRun.setFontFamily("Arial Black"); // <--- AGGIUNTO QUI
                    
                    // 3. Se c'è testo dopo il nome, lo rimette normale
                    if (!dopoParte.isEmpty()) {
                        XWPFRun afterRun = p.insertNewRun(i + 2);
                        afterRun.getCTR().set(run.getCTR().copy());
                        afterRun.setText(dopoParte, 0);
                        afterRun.setBold(false);
                        i++;
                    }
                    i++; // Salta il blocco modificato per evitare cicli infiniti
                }
            }
        }
    }
    
}