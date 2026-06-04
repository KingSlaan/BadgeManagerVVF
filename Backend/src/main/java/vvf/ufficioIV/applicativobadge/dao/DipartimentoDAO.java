package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.dto.DipartimentoDTO;
import java.util.List;

public interface DipartimentoDAO {
    List<DipartimentoDTO> getAllDipartimenti();
    void closeConnection();
}