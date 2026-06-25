package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDipend;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;

public interface TesseraDipend1DAO {
	
	boolean revocaAssegnazioneAttiva(String idTessera, LocalDateTime dataOraFine) throws SQLException;
	
    void closeConnection();
    boolean insertAssegnazione(TesseraDipend assegnazione) throws Exception;
    TesseraDipend getAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio);
    List<TesseraDipend> getAssegnazioniByTessera(String idTessera);
    List<TesseraDipend> getAssegnazioniByDipendente(String codFisDip);
    boolean deleteAssegnazione(String idTessera, String codFisDip, LocalDateTime dataOraInizio) throws Exception;
}