package vvf.ufficioIV.applicativobadge.entity;

import java.time.LocalDateTime;

public class TesseraDipend1 {
    
    private String idTessera; // PK, FK
    private String codFisDip; // PK
    private LocalDateTime dataOraInizioAssegnazione; // PK
    private LocalDateTime dataOraFineAssegnazione;

    public TesseraDipend1() {
    }

    public TesseraDipend1(String idTessera, String codFisDip, LocalDateTime dataOraInizioAssegnazione, LocalDateTime dataOraFineAssegnazione) {
        this.idTessera = idTessera;
        this.codFisDip = codFisDip;
        this.dataOraInizioAssegnazione = dataOraInizioAssegnazione;
        this.dataOraFineAssegnazione = dataOraFineAssegnazione;
    }

    public String getIdTessera() { return idTessera; }
    public void setIdTessera(String idTessera) { this.idTessera = idTessera; }

    public String getCodFisDip() { return codFisDip; }
    public void setCodFisDip(String codFisDip) { this.codFisDip = codFisDip; }

    public LocalDateTime getDataOraInizioAssegnazione() { return dataOraInizioAssegnazione; }
    public void setDataOraInizioAssegnazione(LocalDateTime dataOraInizioAssegnazione) { this.dataOraInizioAssegnazione = dataOraInizioAssegnazione; }

    public LocalDateTime getDataOraFineAssegnazione() { return dataOraFineAssegnazione; }
    public void setDataOraFineAssegnazione(LocalDateTime dataOraFineAssegnazione) { this.dataOraFineAssegnazione = dataOraFineAssegnazione; }
}