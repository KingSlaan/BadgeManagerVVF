export interface Tessera {
  idTessera: string;
  codTipoTessera: string;
  sede: string;
  dataOraIndisponibilita: string;
  dataOraInizioAssegnazione: string;
  dataOraFineAssegnazione: string;
  nome: string;
  cognome: string;
  codiceInterno: string;
  codiceFiscale:string;
  disuso:boolean;
}

export type Tessere = Tessera[];
