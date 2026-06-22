export interface Statistiche {
  generale: StatisticheGenerali;
}

export interface StatisticheSedeChart {
  labels?: string[];
  values?: number[];
}

export interface StatisticheGenerali {
  totali: number;
  libere: number;
  occupate: number;
  indisponibili: number;
  nd: number;
}
