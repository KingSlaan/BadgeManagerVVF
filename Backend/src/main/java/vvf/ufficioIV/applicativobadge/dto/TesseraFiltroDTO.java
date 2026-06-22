package vvf.ufficioIV.applicativobadge.dto;

public class TesseraFiltroDTO {
    // Inizializziamo subito a stringa vuota per evitare null di default
    private String idTessera = "";
    private String codTipoTessera = "";
    private String sede = "";
    private String dataOraIndisponibilita = "";
    private String nome = "";
    private String cognome = "";
    private String codiceFiscale = "";
    private String codiceInterno = "";
    private String dataOraInizioAssegnazione = "";
    private String dataOraFineAssegnazione = "";
    private String stato = "";


    public TesseraFiltroDTO() {}

    public String getIdTessera() { return idTessera; }
    public void setIdTessera(String idTessera) { 
        this.idTessera = (idTessera == null) ? "" : idTessera; 
    }

    public String getCodTipoTessera() { return codTipoTessera; }
    public void setCodTipoTessera(String codTipoTessera) { 
        this.codTipoTessera = (codTipoTessera == null) ? "" : codTipoTessera; 
    }

    public String getSede() { return sede; }
    public void setSede(String sede) { 
        this.sede = (sede == null) ? "" : sede; 
    }

    public String getDataOraIndisponibilita() { return dataOraIndisponibilita; }
    public void setDataOraIndisponibilita(String dataOraIndisponibilita) { 
        this.dataOraIndisponibilita = (dataOraIndisponibilita == null) ? "" : dataOraIndisponibilita; 
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { 
        this.nome = (nome == null) ? "" : nome; 
    }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { 
        this.cognome = (cognome == null) ? "" : cognome; 
    }

    public String getCodiceFiscale() { return codiceFiscale; }
    public void setCodiceFiscale(String codiceFiscale) { 
        this.codiceFiscale = (codiceFiscale == null) ? "" : codiceFiscale; 
    }

    public String getCodiceInterno() { return codiceInterno; }
    public void setCodiceInterno(String codiceInterno) { 
        this.codiceInterno = (codiceInterno == null) ? "" : codiceInterno; 
    }

    public String getDataOraInizioAssegnazione() { return dataOraInizioAssegnazione; }
    public void setDataOraInizioAssegnazione(String dataOraInizioAssegnazione) { 
        this.dataOraInizioAssegnazione = (dataOraInizioAssegnazione == null) ? "" : dataOraInizioAssegnazione; 
    }

    public String getDataOraFineAssegnazione() { return dataOraFineAssegnazione; }
    public void setDataOraFineAssegnazione(String dataOraFineAssegnazione) { 
        this.dataOraFineAssegnazione = (dataOraFineAssegnazione == null) ? "" : dataOraFineAssegnazione; 
    }
    
    public String getStato() {
        return stato;
    }
    public void setStato(String stato) {
        this.stato = stato;
    }
}