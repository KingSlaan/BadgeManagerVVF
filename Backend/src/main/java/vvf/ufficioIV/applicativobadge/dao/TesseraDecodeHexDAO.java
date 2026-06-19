package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDecodeHex;
import java.sql.SQLException;
import java.util.Map;

public interface TesseraDecodeHexDAO {
    // Metodo principale per l'inserimento
    boolean insertTesseraDecodeHex(TesseraDecodeHex hexEntity) throws SQLException;
    
    // Metodi utili per coerenza con gli altri DAO e future implementazioni
    TesseraDecodeHex getByIdTessera(String idTessera);
    boolean deleteByIdTessera(String idTessera) throws SQLException;

	Map<String, String> getMappaValoriHex();
}