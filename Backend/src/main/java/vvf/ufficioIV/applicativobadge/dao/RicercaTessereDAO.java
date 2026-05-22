package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.TesseraFiltroDTO;
import com.google.gson.JsonArray;
import java.util.List;

public interface RicercaTessereDAO {
    List<TesseraFiltroDTO> getTessereByFilters(JsonArray filters, int page, int pageSize);
    int countTessereByFilters(JsonArray filters);
    
    // NUOVO METODO
    TesseraFiltroDTO getTesseraById(String idTessera);
    
    void closeConnection();
}