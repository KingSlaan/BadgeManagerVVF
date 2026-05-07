package vvf.ufficioIV.applicativobadge.entity;

public class TesseraDecode1 {
    
    private String idTessera; // Primary Key & Foreign Key
    private String codiceInterno; // Unique

    public TesseraDecode1() {
    }

    public TesseraDecode1(String idTessera, String codiceInterno) {
        this.idTessera = idTessera;
        this.codiceInterno = codiceInterno;
    }

    public String getIdTessera() { return idTessera; }
    public void setIdTessera(String idTessera) { this.idTessera = idTessera; }

    public String getCodiceInterno() { return codiceInterno; }
    public void setCodiceInterno(String codiceInterno) { this.codiceInterno = codiceInterno; }
}