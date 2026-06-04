package vvf.ufficioIV.applicativobadge.dto;

public class DipartimentoDTO {

    private String codSede;
    private String descrizione;
    private Integer conteggioTessere; // <-- NUOVO CAMPO

    public DipartimentoDTO() {}

    public DipartimentoDTO(String codSede, String descrizione) {
        this.codSede = codSede;
        this.descrizione = descrizione;
    }

    public String getCodSede() { return codSede; }
    public void setCodSede(String codSede) { this.codSede = codSede; }

    public String getDescrizione() { return descrizione; }
    public void setDescrizione(String descrizione) { this.descrizione = descrizione; }

    // <-- NUOVI GETTER E SETTER -->
    public Integer getConteggioTessere() { return conteggioTessere; }
    public void setConteggioTessere(Integer conteggioTessere) { this.conteggioTessere = conteggioTessere; }
}