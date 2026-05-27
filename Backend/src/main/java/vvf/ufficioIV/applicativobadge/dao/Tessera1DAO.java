package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.Tessera1;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;

public interface Tessera1DAO {

	boolean invalidaTessera(String idTessera, LocalDateTime dataOraIndisponibilita) throws SQLException;
	
    // L'inizializzazione o l'iniezione della connessione di solito non va nell'interfaccia, 
    // ma la lascio se vuoi seguire strettamente il tuo vecchio pattern.
    void closeConnection();

    boolean insertTessera(Tessera1 tessera) throws Exception;
    
    Tessera1 getTesseraById(String idTessera);
    
    List<Tessera1> getAllTessere();
    
    boolean deleteTesseraById(String idTessera) throws Exception;
    
    boolean updateSede(String idTessera, String nuovaSede) throws SQLException;
} 