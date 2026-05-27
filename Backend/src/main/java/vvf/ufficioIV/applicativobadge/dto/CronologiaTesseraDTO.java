package vvf.ufficioIV.applicativobadge.dto;

public class CronologiaTesseraDTO {
    private String codFiscale = "";
    private String nome = "";
    private String cognome = "";
    private String dataOraInizioAssegnazione = "";
    private String dataOraFineAssegnazione = "";

    public CronologiaTesseraDTO() {}

    public String getCodFiscale() { return codFiscale; }
    public void setCodFiscale(String codFiscale) { this.codFiscale = (codFiscale == null) ? "" : codFiscale; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = (nome == null) ? "" : nome; }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { this.cognome = (cognome == null) ? "" : cognome; }

    public String getDataOraInizioAssegnazione() { return dataOraInizioAssegnazione; }
    public void setDataOraInizioAssegnazione(String dataOraInizioAssegnazione) { this.dataOraInizioAssegnazione = (dataOraInizioAssegnazione == null) ? "" : dataOraInizioAssegnazione; }

    public String getDataOraFineAssegnazione() { return dataOraFineAssegnazione; }
    public void setDataOraFineAssegnazione(String dataOraFineAssegnazione) { this.dataOraFineAssegnazione = (dataOraFineAssegnazione == null) ? "" : dataOraFineAssegnazione; }
}