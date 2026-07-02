package vvf.ufficioIV.applicativobadge.dto;

public class DipartimentoDTO {

    private String codSede;
    private String descrizione;
    
    // <-- NUOVI CAMPI DB -->
    private String indirizzoSede;
    private String email;
    private String numTel1Sede;
    
    private Integer conteggioTessere; 

    public DipartimentoDTO() {}

    // Costruttore aggiornato con i nuovi campi
    public DipartimentoDTO(String codSede, String descrizione, String indirizzoSede, String email, String numTel1Sede) {
        this.codSede = codSede;
        this.descrizione = descrizione;
        this.indirizzoSede = indirizzoSede;
        this.email = email;
        this.numTel1Sede = numTel1Sede;
    }
    
    // Costruttore legacy (nel caso venga usato altrove senza i nuovi campi)
    public DipartimentoDTO(String codSede, String descrizione) {
        this.codSede = codSede;
        this.descrizione = descrizione;
    }

    public String getCodSede() { return codSede; }
    public void setCodSede(String codSede) { this.codSede = codSede; }

    public String getDescrizione() { return descrizione; }
    public void setDescrizione(String descrizione) { this.descrizione = descrizione; }

    public Integer getConteggioTessere() { return conteggioTessere; }
    public void setConteggioTessere(Integer conteggioTessere) { this.conteggioTessere = conteggioTessere; }

    // <-- NUOVI GETTER E SETTER -->
    public String getIndirizzoSede() { return indirizzoSede; }
    public void setIndirizzoSede(String indirizzoSede) { this.indirizzoSede = indirizzoSede; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getNumTel1Sede() { return numTel1Sede; }
    public void setNumTel1Sede(String numTel1Sede) { this.numTel1Sede = numTel1Sede; }
}