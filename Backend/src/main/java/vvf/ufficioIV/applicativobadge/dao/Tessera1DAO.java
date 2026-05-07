package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.Tessera1;
import java.util.List;

public interface Tessera1DAO {

    // L'inizializzazione o l'iniezione della connessione di solito non va nell'interfaccia, 
    // ma la lascio se vuoi seguire strettamente il tuo vecchio pattern.
    void closeConnection();

    boolean insertTessera(Tessera1 tessera) throws Exception;
    
    Tessera1 getTesseraById(String idTessera);
    
    List<Tessera1> getAllTessere();
    
    boolean deleteTesseraById(String idTessera) throws Exception;
}