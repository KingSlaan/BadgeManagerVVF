package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDipend1;
import java.time.LocalDateTime;
import java.util.List;

public interface TesseraDipend1DAO {
    void closeConnection();
    boolean insertAssegnazione(TesseraDipend1 assegnazione) throws Exception;
    TesseraDipend1 getAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio);
    List<TesseraDipend1> getAssegnazioniByTessera(String idTessera);
    List<TesseraDipend1> getAssegnazioniByDipendente(String codFisDip);
    boolean deleteAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio) throws Exception;
}