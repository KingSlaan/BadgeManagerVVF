package vvf.ufficioIV.applicativobadge.entity;

public class AnagraficaCodFiscale {
    
    private String codFiscale;
    private String nome;
    private String cognome;
    
    // NUOVI CAMPI
    private String dataNascita; 
    private String sesso;
    private String idSede;

    public AnagraficaCodFiscale() {
    }

    // Costruttore aggiornato
    public AnagraficaCodFiscale(String codFiscale, String nome, String cognome, String dataNascita, String sesso, String idSede) {
        this.codFiscale = codFiscale;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.sesso = sesso;
        this.idSede = idSede;
    }

    public String getCodFiscale() { return codFiscale; }
    public void setCodFiscale(String codFiscale) { this.codFiscale = codFiscale; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { this.cognome = cognome; }

    // GETTER E SETTER DEI NUOVI CAMPI
    public String getDataNascita() { return dataNascita; }
    public void setDataNascita(String dataNascita) { this.dataNascita = dataNascita; }

    public String getSesso() { return sesso; }
    public void setSesso(String sesso) { this.sesso = sesso; }

    public String getIdSede() { return idSede; }
    public void setIdSede(String idSede) { this.idSede = idSede; }
}