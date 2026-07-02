package vvf.ufficioIV.applicativobadge.dto;

import java.util.List;

public class RichiestaBadgeDTO {
    private String descrizioneSede;
    private String oggettoMail;
    private String nrProtocollo;
    private String data;
    private List<NominativoDTO> nominativi;
    
    // NUOVI CAMPI
    private boolean isSostitutiva;
    private int numeroBadge; 
    
    public RichiestaBadgeDTO() {
        super();
    }

    public RichiestaBadgeDTO(String descrizioneSede, String oggettoMail, String nrProtocollo, String data,
            List<NominativoDTO> nominativi, boolean isSostitutiva, int numeroBadge) {
        super();
        this.descrizioneSede = descrizioneSede;
        this.oggettoMail = oggettoMail;
        this.nrProtocollo = nrProtocollo;
        this.data = data;
        this.nominativi = nominativi;
        this.isSostitutiva = isSostitutiva;
        this.numeroBadge = numeroBadge;
    }

    // --- Getter e Setter esistenti ---
    public String getDescrizioneSede() { return descrizioneSede; }
    public void setDescrizioneSede(String descrizioneSede) { this.descrizioneSede = descrizioneSede; }

    public String getOggettoMail() { return oggettoMail; }
    public void setOggettoMail(String oggettoMail) { this.oggettoMail = oggettoMail; }

    public String getNrProtocollo() { return nrProtocollo; }
    public void setNrProtocollo(String nrProtocollo) { this.nrProtocollo = nrProtocollo; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public List<NominativoDTO> getNominativi() { return nominativi; }
    public void setNominativi(List<NominativoDTO> nominativi) { this.nominativi = nominativi; }

    // --- Nuovi Getter e Setter ---
    public boolean isSostitutiva() { return isSostitutiva; }
    public void setSostitutiva(boolean isSostitutiva) { this.isSostitutiva = isSostitutiva; }

    public int getNumeroBadge() { return numeroBadge; }
    public void setNumeroBadge(int numeroBadge) { this.numeroBadge = numeroBadge; }
}