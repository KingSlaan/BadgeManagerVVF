package vvf.ufficioIV.applicativobadge.entity;

public class AnagraficaCodFiscale1 {
    
    private String codFiscale;
    private String nome;
    private String cognome;

    public AnagraficaCodFiscale1() {
    }

    public AnagraficaCodFiscale1(String codFiscale, String nome, String cognome) {
        this.codFiscale = codFiscale;
        this.nome = nome;
        this.cognome = cognome;
    }

    public String getCodFiscale() { return codFiscale; }
    public void setCodFiscale(String codFiscale) { this.codFiscale = codFiscale; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { this.cognome = cognome; }
}