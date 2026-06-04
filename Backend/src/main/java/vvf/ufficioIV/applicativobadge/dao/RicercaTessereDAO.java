package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.CronologiaTesseraDTO;
import vvf.ufficioIV.applicativobadge.dto.StatisticheTessereDTO;
import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import com.google.gson.JsonArray;
import java.util.List;

public interface RicercaTessereDAO {
    
	List<TesseraFiltroDTO> getTessereByFilters(JsonArray filters, int page, int pageSize);
    
    int countTessereByFilters(JsonArray filters);
    
    
    TesseraFiltroDTO getTesseraById(String idTessera);
    
    List<CronologiaTesseraDTO> getCronologiaByTessera(String idTessera);
    
    StatisticheTessereDTO getStatisticheGenerali();
    
    void closeConnection();
}