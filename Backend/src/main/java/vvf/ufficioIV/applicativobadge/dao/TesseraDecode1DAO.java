package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDecode;

public interface TesseraDecode1DAO {
    void closeConnection();
    boolean insertTesseraDecode(TesseraDecode tDecode) throws Exception;
    TesseraDecode getByIdTessera(String idTessera);
    TesseraDecode getByCodiceInterno(String codiceInterno);
    boolean deleteByIdTessera(String idTessera) throws Exception;
    boolean existsByLast10CharsCodiceInterno(String suffix);
}
