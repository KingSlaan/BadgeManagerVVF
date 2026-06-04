package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;
import java.util.List;

import com.google.gson.JsonArray;

public interface DipartimentoDAO {
	
    List<DipartimentoDTO> getDipartimentiByFilters(JsonArray filters);
    
    List<DipartimentoDTO> getDipartimentiConConteggioTessere();
    
    void closeConnection();
}