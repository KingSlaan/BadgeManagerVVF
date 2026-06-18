package vvf.ufficioIV.applicativobadge.dao;

import vvf.ufficioIV.applicativobadge.entity.TesseraDecode1;

public interface TesseraDecode1DAO {
    void closeConnection();
    boolean insertTesseraDecode(TesseraDecode1 tDecode) throws Exception;
    TesseraDecode1 getByIdTessera(String idTessera);
    TesseraDecode1 getByCodiceInterno(String codiceInterno);
    boolean deleteByIdTessera(String idTessera) throws Exception;
}
