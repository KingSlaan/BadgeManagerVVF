package vvf.ufficioIV.applicativobadge.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import vvf.ufficioIV.applicativobadge.dao.Tessera1DAO;
import vvf.ufficioIV.applicativobadge.dao.Tessera1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecode1DAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecodeHexDAO;
import vvf.ufficioIV.applicativobadge.dao.TesseraDecodeHexDAOJDBCImpl;
import vvf.ufficioIV.applicativobadge.entity.Tessera;
import vvf.ufficioIV.applicativobadge.entity.TesseraDecode;
import vvf.ufficioIV.applicativobadge.entity.TesseraDecodeHex;
import vvf.ufficioIV.applicativobadge.util.ResponseUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

/**
 * ==========================================================================================
 * API ENDPOINT : /inserimentoTessereServlet METODO HTTP : POST DESCRIZIONE :
 * Inserimento massivo di una lista di tessere nel database. Esegue
 * l'inserimento incrociato sulle tabelle Tessera1 e TesseraDecode1.
 * ==========================================================================================
 * * 📥 REQUEST (Cosa deve inviare il Frontend)
 * ------------------------------------------------------------------------------------------
 * Content-Type : application/json Body : Array di oggetti JSON [ { "idTessera":
 * "stringa", // Obbligatorio - ID della tessera "codiceInterno": "stringa" //
 * Obbligatorio - Codice interno da associare } ] * * 📤 RESPONSE OK (Casi di
 * successo - HTTP 200)
 * ------------------------------------------------------------------------------------------
 * Utilizza : ResponseUtil.sendOkNoData Struttura : { "esito": "OK",
 * "messaggio": "Tessere (X) inserite correttamente.", "data": null } * * 🚫
 * RESPONSE KO (Casi di errore - HTTP 400, 405, 500)
 * ------------------------------------------------------------------------------------------
 * Utilizza : ResponseUtil.sendError Casistiche : - HTTP 400 : "Body della
 * richiesta vuoto o mancante." - HTTP 400 : "Body JSON non valido, atteso un
 * array." - HTTP 400 : "Sintassi JSON non valida." - HTTP 400 : "Nessuna
 * tessera inviata." - HTTP 405 : "Usa POST" (Se l'endpoint viene chiamato in
 * GET) - HTTP 500 : "Configurazione DB non trovata." - HTTP 500 : "Errore
 * interno: Parametri obbligatori mancanti per il record con idTessera:
 * <idTessera>" - HTTP 500 : "Errore interno: Inserimento in Tessera1 fallito
 * per idTessera: <idTessera>" - HTTP 500 : "Errore interno: Inserimento in
 * TesseraDecode1 fallito per idTessera: <idTessera>" Struttura : { "esito":
 * "KO", "messaggio": "<descrizione specifica dell'errore>" }
 * ==========================================================================================
 */
@WebServlet("/inserimentoTessereServlet")
public class InserimentoTessereServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private static final String DEFAULT_SEDE = "00";
	private static final String DEFAULT_COD_TIPO_TESSERA = "S";
	private static final Integer DEFAULT_TESSERA_ATE = 0;
	private static final LocalDateTime DEFAULT_DATA_ORA_INDISP = LocalDateTime.of(9999, 12, 31, 23, 59, 59);

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("[inserimentoTessereServlet] >>> Inizio doPost");

		// 1. Leggi body JSON
		StringBuilder sb = new StringBuilder();
		try (BufferedReader reader = request.getReader()) {
			String line;
			while ((line = reader.readLine()) != null)
				sb.append(line);
		}
		String bodyJson = sb.toString();

		if (bodyJson == null || bodyJson.trim().isEmpty()) {
			ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
					"Body della richiesta vuoto o mancante.");
			return;
		}

		// 2. Parsa JSON come ARRAY
		JsonArray jsonArray;
		try {
			JsonElement parsedElement = JsonParser.parseString(bodyJson);
			if (!parsedElement.isJsonArray()) {
				ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
						"Body JSON non valido, atteso un array.");
				return;
			}
			jsonArray = parsedElement.getAsJsonArray();
		} catch (JsonSyntaxException e) {
			ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Sintassi JSON non valida.");
			return;
		}

		if (jsonArray.isEmpty()) {
			ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, "Nessuna tessera inviata.");
			return;
		}

		// 3. Carica config DB
		Properties props = new Properties();
		try (InputStream is = getServletContext().getResourceAsStream("/WEB-INF/db.properties")) {
			if (is == null) {
				ResponseUtil.sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
						"Configurazione DB non trovata.");
				return;
			}
			props.load(is);
		}

		String ip = props.getProperty("db.ip");
		String port = props.getProperty("db.port");
		String db = props.getProperty("db.name");
		String user = props.getProperty("db.user");
		String pwd = props.getProperty("db.password");

		// CREIAMO LA CONNESSIONE QUI PER GESTIRE LA TRANSAZIONE
		Connection sharedConnection = null;

		try {
			Class.forName("oracle.jdbc.OracleDriver");
			String dbUrl = "jdbc:oracle:thin:@//" + ip + ":" + port + "/" + db;
			sharedConnection = DriverManager.getConnection(dbUrl, user, pwd);

			// DISABILITIAMO L'AUTOCOMMIT (INIZIO TRANSAZIONE)
			sharedConnection.setAutoCommit(false);

			Tessera1DAO daoTessera = new Tessera1DAOJDBCImpl(sharedConnection);
			TesseraDecode1DAO daoTesseraDecode = new TesseraDecode1DAOJDBCImpl(sharedConnection);
			TesseraDecodeHexDAO daoTesseraDecodeHex = new TesseraDecodeHexDAOJDBCImpl(sharedConnection);

			// SCARICHIAMO IL DIZIONARIO UNA SOLA VOLTA PER TUTTA LA RICHIESTA (Altamente
			// performante!)
			Map<String, String> dizionarioHex = daoTesseraDecodeHex.getMappaValoriHex();
			if (dizionarioHex.isEmpty()) {
				throw new Exception(
						"Errore critico: impossibile caricare la tabella T_VALORI_HEX_IDTESSERA dal Database.");
			}

			List<Tessera> tessereDaInserire = new ArrayList<>();
			List<TesseraDecode> decodeDaInserire = new ArrayList<>();
			List<TesseraDecodeHex> hexDaInserire = new ArrayList<>();

			// ====================================================================================
			// FASE 1: CONTROLLI MANIACALI E FORMATTAZIONE (PRE-FLIGHT CHECK)
			// ====================================================================================
			for (int i = 0; i < jsonArray.size(); i++) {
				JsonElement element = jsonArray.get(i);
				if (!element.isJsonObject()) {
					throw new Exception("L'elemento all'indice " + i + " non è un oggetto JSON valido.");
				}

				JsonObject json = element.getAsJsonObject();
				String rawIdTessera = getStringSafe(json, "idTessera");
				String rawCodiceInterno = getStringSafe(json, "codiceInterno");

				if (isBlank(rawIdTessera) || isBlank(rawCodiceInterno)) {
					throw new Exception("Parametri obbligatori mancanti all'indice " + i + ".");
				}

				// Formattazione
				String idTessera;
				// Il codice interno rimane ESATTAMENTE quello passato dal frontend (rimuoviamo
				// solo gli spazi iniziali/finali accidentali)
				String codiceInterno = rawCodiceInterno.trim();

				// Nuovo controllo di sicurezza per la lunghezza massima
				if (codiceInterno.length() > 20) {
					throw new Exception("Errore di validazione all'indice " + i
							+ ": Il codice interno supera la lunghezza massima consentita di 20 caratteri (Trovati: "
							+ codiceInterno.length() + ").");
				}

				// PER ASSICURARCI DI AVERE SEMPRE 20 CARATTERI (PAD CON ZERI A SINISTRA SE
				// MINORE DI 20)
				// Così "prefisso" e "suffisso" saranno sempre esattamente di 10 caratteri.
				String codiceInternoPadded = String.format("%20s", codiceInterno).replace(' ', '0');

				String prefissoCodice = codiceInternoPadded.substring(0, 10);
				String suffissoCodice = codiceInternoPadded.substring(10, 20);

				// Generazione Hex (usa il metodo helper)
				String prefissoHex = convertToCustomHex(prefissoCodice, dizionarioHex);
				String suffissoHex = convertToCustomHex(suffissoCodice, dizionarioHex);

				// TODO: LA COSA SEGUENTE VA ANCORA MANTENUTA?
				String suffixCodiceInterno = codiceInterno.length() > 10
						? codiceInterno.substring(codiceInterno.length() - 10)
						: codiceInterno;

				try {
					idTessera = formattaStringaNumerica(rawIdTessera, 10, "ID Tessera");
				} catch (IllegalArgumentException e) {
					throw new Exception("Errore di validazione all'indice " + i + ": " + e.getMessage());
				}

				// Verifica Duplicati sul Database
				if (daoTessera.getTesseraById(idTessera) != null) {
					throw new Exception("Inserimento bloccato: La tessera " + idTessera + " esiste già nel Database.");
				}
				if (daoTesseraDecode.getByCodiceInterno(codiceInterno) != null) {
					throw new Exception("Inserimento bloccato: Il codice interno " + codiceInterno
							+ " è già assegnato in modo esatto.");
				}

				// ATTENZIONE QUI: Modifichiamo il controllo per usare il suffisso (che è ciò
				// che ora va in TesseraDecode1)
				if (daoTesseraDecode.getByCodiceInterno(suffissoCodice) != null) { // <--- MODIFICATO
					throw new Exception(
							"Inserimento bloccato: Il codice interno " + suffissoCodice + " è già assegnato.");
				}

				// Verifica Duplicati interni al JSON
				for (Tessera t : tessereDaInserire) {
					if (t.getIdTessera().equals(idTessera)) {
						throw new Exception("Payload non valido: La tessera " + idTessera
								+ " è presente più volte nella richiesta.");
					}
				}
				for (TesseraDecode td : decodeDaInserire) {
					if (td.getCodiceInterno().equals(codiceInterno)) {
						throw new Exception("Payload non valido: Il codice interno " + codiceInterno
								+ " è presente più volte nella richiesta.");
					}

					// RIDONDANTE MA OK: Verifica duplicazione degli ultimi 10 caratteri all'interno
					// della richiesta JSON corrente
					String existingCode = td.getCodiceInterno();
					String existingSuffix = existingCode.length() > 10
							? existingCode.substring(existingCode.length() - 10)
							: existingCode;

					if (existingSuffix.equals(suffixCodiceInterno)) {
						throw new Exception("Payload non valido: Il suffisso di 10 caratteri (" + suffixCodiceInterno
								+ ") è duplicato tra le tessere della richiesta.");
					}
				}

				tessereDaInserire.add(new Tessera(idTessera, DEFAULT_COD_TIPO_TESSERA, DEFAULT_SEDE,
						DEFAULT_DATA_ORA_INDISP, DEFAULT_TESSERA_ATE));

				// CRITICO: IN tesseradecode METTIAMO SOLO GLI ULTIMI 10 CARATTERI COME
				// RICHIESTO!
				decodeDaInserire.add(new TesseraDecode(idTessera, suffissoCodice));

				// POPOLIAMO LA NUOVA ENTITY TESSERADECODE_HEX
				TesseraDecodeHex hexEntity = new TesseraDecodeHex();
				hexEntity.setIdTessera(idTessera);
				hexEntity.setCodiceInternoPref(prefissoCodice);
				hexEntity.setCodiceInternoSuff(suffissoCodice);
				hexEntity.setPrefissoHex(prefissoHex);
				hexEntity.setSuffissoHex(suffissoHex);
				hexDaInserire.add(hexEntity);
			}

			// ====================================================================================
			// FASE 2: INSERIMENTO EFFETTIVO NEL DATABASE
			// ====================================================================================
			int tessereInserite = 0;
			for (int i = 0; i < tessereDaInserire.size(); i++) {
				Tessera tessera = tessereDaInserire.get(i);
				TesseraDecode decode = decodeDaInserire.get(i);
				TesseraDecodeHex hex = hexDaInserire.get(i);

				if (!daoTessera.insertTessera(tessera)) {
					throw new Exception("Inserimento in Tessera1 fallito per idTessera: " + tessera.getIdTessera());
				}

				if (!daoTesseraDecode.insertTesseraDecode(decode)) {
					throw new Exception(
							"Inserimento in TesseraDecode1 fallito per idTessera: " + tessera.getIdTessera());
				}

				if (!daoTesseraDecodeHex.insertTesseraDecodeHex(hex)) {
					throw new Exception(
							"Inserimento in TesseraDecode_Hex fallito per idTessera: " + tessera.getIdTessera());
				}

				tessereInserite++;
			}

			// TUTTO E' ANDATO BENE: SALVIAMO DEFINITIVAMENTE I DATI NEL DB (COMMIT)
			sharedConnection.commit();
			ResponseUtil.sendOkNoData(response,
					"Tessere (" + tessereInserite + ") validate ed inserite correttamente con un'unica transazione.");

		} catch (Exception e) {
			System.err.println("[inserimentoTessereServlet] Eccezione: " + e.getMessage());

			// C'E' STATO UN ERRORE: ANNULLIAMO TUTTE LE OPERAZIONI PENDENTI (ROLLBACK)
			if (sharedConnection != null) {
				try {
					sharedConnection.rollback();
					System.err.println(
							"[inserimentoTessereServlet] Rollback eseguito: nessuna tessera del blocco è stata salvata.");
				} catch (SQLException ex) {
					System.err.println(
							"[inserimentoTessereServlet] Errore critico durante il rollback: " + ex.getMessage());
				}
			}
			ResponseUtil.sendError(response, HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
		} finally {
			// CHIUSURA DELLA CONNESSIONE CONDIVISA
			if (sharedConnection != null) {
				try {
					sharedConnection.setAutoCommit(true); // E' buona prassi ripristinarlo prima di chiudere
					sharedConnection.close();
				} catch (SQLException ex) {
					System.err.println("Errore durante la chiusura della connessione: " + ex.getMessage());
				}
			}
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ResponseUtil.sendError(response, HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Usa POST");
	}

	// ── Utility locali ────────────────────────────────────────────────────────

	private String formattaStringaNumerica(String input, int targetLength, String nomeCampo)
			throws IllegalArgumentException {
		input = input.trim();

		if (!input.matches("\\d+")) {
			throw new IllegalArgumentException(
					"Il campo " + nomeCampo + " deve contenere solo numeri. Valore anomalo: '" + input + "'");
		}
		if (input.length() > targetLength) {
			throw new IllegalArgumentException(
					"Il campo " + nomeCampo + " supera la lunghezza di " + targetLength + " caratteri.");
		}

		StringBuilder sb = new StringBuilder(input);
		while (sb.length() < targetLength) {
			sb.insert(0, "0");
		}
		return sb.toString();
	}

	private String getStringSafe(JsonObject json, String key) {
		try {
			return json.has(key) && !json.get(key).isJsonNull() ? json.get(key).getAsString() : null;
		} catch (Exception e) {
			return null;
		}
	}

	private boolean isBlank(String s) {
		return s == null || s.trim().isEmpty();
	}

	// UTIL PER TESSERADECODEHEX
	/**
	 * Riproduce fedelmente la logica della stored procedure CARICA_TESSERADECODE.
	 * Spezza la stringa di 10 in blocchi di 2 e li mappa. Se manca un valore,
	 * restituisce "FFFFF".
	 */
	private String convertToCustomHex(String input10Chars, Map<String, String> dizionarioHex) {
		if (input10Chars == null || input10Chars.length() != 10) {
			return "FFFFF"; // Fallback di sicurezza
		}

		StringBuilder hexResult = new StringBuilder();

		for (int i = 0; i < 10; i += 2) {
			String bloccoDueCaratteri = input10Chars.substring(i, i + 2);
			String valoreMappato = dizionarioHex.get(bloccoDueCaratteri);

			// Logica PL/SQL: se un blocco non esiste, scatta l'eccezione WHEN OTHERS e
			// TUTTO diventa FFFFF
			if (valoreMappato == null) {
				return "FFFFF";
			}
			hexResult.append(valoreMappato);
		}

		return hexResult.toString();
	}
}