package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.AnagraficaCodFiscale1;
import java.util.List;

public interface AnagraficaCodFiscale1DAO {
    void closeConnection();
    boolean insertAnagrafica(AnagraficaCodFiscale1 anagrafica) throws Exception;
    AnagraficaCodFiscale1 getByCodFiscale(String codFiscale);
    List<AnagraficaCodFiscale1> getAllAnagrafiche();
    boolean deleteByCodFiscale(String codFiscale) throws Exception;
}