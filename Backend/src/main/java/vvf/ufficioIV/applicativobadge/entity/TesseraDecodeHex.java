package vvf.ufficioIV.applicativobadge.entity;

public class TesseraDecodeHex {
	
	private String idTessera;
	private String codiceInternoPref;
	private String codiceInternoSuff;
	private String prefissoHex;
	private String suffissoHex;
	
	public TesseraDecodeHex() {
		super();
	}

	public TesseraDecodeHex(String idTessera, String codiceInternoPref, String codiceInternoSuff, String prefissoHex,
			String suffissoHex) {
		super();
		this.idTessera = idTessera;
		this.codiceInternoPref = codiceInternoPref;
		this.codiceInternoSuff = codiceInternoSuff;
		this.prefissoHex = prefissoHex;
		this.suffissoHex = suffissoHex;
	}

	public String getIdTessera() {
		return idTessera;
	}

	public void setIdTessera(String idTessera) {
		this.idTessera = idTessera;
	}

	public String getCodiceInternoPref() {
		return codiceInternoPref;
	}

	public void setCodiceInternoPref(String codiceInternoPref) {
		this.codiceInternoPref = codiceInternoPref;
	}

	public String getCodiceInternoSuff() {
		return codiceInternoSuff;
	}

	public void setCodiceInternoSuff(String codiceInternoSuff) {
		this.codiceInternoSuff = codiceInternoSuff;
	}

	public String getPrefissoHex() {
		return prefissoHex;
	}

	public void setPrefissoHex(String prefissoHex) {
		this.prefissoHex = prefissoHex;
	}

	public String getSuffissoHex() {
		return suffissoHex;
	}

	public void setSuffissoHex(String suffissoHex) {
		this.suffissoHex = suffissoHex;
	}
	
	
}
