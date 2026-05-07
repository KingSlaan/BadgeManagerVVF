package vvf.ufficioIV.applicativobadge.entity;

import java.time.LocalDateTime;

public class Tessera1 {
    
    private String idTessera; // Primary Key
    private String codTipoTessera;
    private String sede;
    private LocalDateTime dataOraIndisponibilita;
    private Integer tesseraAte;

    public Tessera1() {
    }

    public Tessera1(String idTessera, String codTipoTessera, String sede, LocalDateTime dataOraIndisponibilita, Integer tesseraAte) {
        this.idTessera = idTessera;
        this.codTipoTessera = codTipoTessera;
        this.sede = sede;
        this.dataOraIndisponibilita = dataOraIndisponibilita;
        this.tesseraAte = tesseraAte;
    }

    public String getIdTessera() { return idTessera; }
    public void setIdTessera(String idTessera) { this.idTessera = idTessera; }

    public String getCodTipoTessera() { return codTipoTessera; }
    public void setCodTipoTessera(String codTipoTessera) { this.codTipoTessera = codTipoTessera; }

    public String getSede() { return sede; }
    public void setSede(String sede) { this.sede = sede; }

    public LocalDateTime getDataOraIndisponibilita() { return dataOraIndisponibilita; }
    public void setDataOraIndisponibilita(LocalDateTime dataOraIndisponibilita) { this.dataOraIndisponibilita = dataOraIndisponibilita; }

    public Integer getTesseraAte() { return tesseraAte; }
    public void setTesseraAte(Integer tesseraAte) { this.tesseraAte = tesseraAte; }
}