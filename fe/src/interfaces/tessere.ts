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
  codTipoTessera?: string;
  dataOraIndisponibilita?: string;
  dataOraInizioAssegnazione?: string;
  dataOraFineAssegnazione?: string;
}

export interface Dipendente {
  codFiscale: string[];
  nome: string;
  cognome: string;
  idTessera?: string;
}

export interface AssegnazioneBody {
  dipendenti: Dipendente[];
  numeroPartenzaTopDown: string;
}

export interface ApplicaAssegnazioneBody {
  tessere: Dipendente[];
  sede: string;
  dataInizioAssegnazione: string;
  dataFineAssegnazione?: string;
}

