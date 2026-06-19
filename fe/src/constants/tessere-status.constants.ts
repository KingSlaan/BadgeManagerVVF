export type TesseraStatus = 'LIBERA' | 'INDISPONIBILE' | 'OCCUPATA';

export const TESSERE_STATUS_COLORS: Record<TesseraStatus, string> = {
  LIBERA: 'success',
  INDISPONIBILE: 'danger',
  OCCUPATA: 'warning'
};

export const TESSERE_STATUS_MESSAGES: Record<TesseraStatus, string> = {
  LIBERA: 'Libera',
  INDISPONIBILE: 'Indisponibile',
  OCCUPATA: 'Occupata'
};

// verde = libera --> indisponibilità attiva e non assegnata ;
  // Assegna, Cambia Sede, Cambia Validità, Cronologia
// rosso = data indisponibilità superata -->
  //
// giallo=occupata con indisponibilità attiva ma assegnata ATTUALMENTE a qualcuno ; -->
  // Disuso, Cambia Sede, Cambia Validità, Cronologia, Stampa
