package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale;
import java.util.List;

public interface AnagraficaCodFiscale1DAO {
    
	AnagraficaCodFiscale getByCodFiscale(String codFiscale);
    List<AnagraficaCodFiscale> getAllAnagrafiche();
	
	void closeConnection();
    
    //boolean insertAnagrafica(AnagraficaCodFiscale anagrafica) throws Exception;
    //boolean deleteByCodFiscale(String codFiscale) throws Exception;
}