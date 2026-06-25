package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale;
import java.util.List;

public interface AnagraficaCodFiscale1DAO {
    void closeConnection();
    boolean insertAnagrafica(AnagraficaCodFiscale anagrafica) throws Exception;
    AnagraficaCodFiscale getByCodFiscale(String codFiscale);
    List<AnagraficaCodFiscale> getAllAnagrafiche();
    boolean deleteByCodFiscale(String codFiscale) throws Exception;
}