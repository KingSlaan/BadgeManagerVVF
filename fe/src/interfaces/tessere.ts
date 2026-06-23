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
  codiceFiscale: string;
  stato: string;
}

export type Tessere = Tessera[];

export const tesseraEmpty: Tessera = {
  idTessera: "",
  codTipoTessera: "",
  sede: "",
  dataOraIndisponibilita: "",
  dataOraInizioAssegnazione: "",
  dataOraFineAssegnazione: "",
  nome: "",
  cognome: "",
  codiceInterno: "",
  codiceFiscale: "",
  stato: "",
}

export interface TessereMassiva {
  idTessere: string[];
  sede?: string;
  dataOraIndisponibilita?: string;
  dataOraInizioAssegnazione?: string;
  dataOraFineAssegnazione?: string;
}
