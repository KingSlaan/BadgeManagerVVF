export interface Statistiche {
  generale: StatisticheGenerali;
}

export interface StatisticheSedeChart {
  labels?: string[];
  values?: number[];
}

export interface StatisticheGenerali {
  totali: number;
  assegnati: number;
  nonAssegnati: number;
  inutilizzabili: number;
  nd: number;
}
