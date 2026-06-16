package vvf.ufficioIV.applicativobadge.dto;

public class NominativoDTO {
	private String cognome;
    private String nome;
    private String codFis; // opzionale
    
	public NominativoDTO() {
		super();
	}
	public NominativoDTO(String cognome, String nome, String codFis) {
		super();
		this.cognome = cognome;
		this.nome = nome;
		this.codFis = codFis;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCodFis() {
		return codFis;
	}
	public void setCodFis(String codFis) {
		this.codFis = codFis;
	}

    
}
