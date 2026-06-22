export type TesseraStatus = 'LIBERA' | 'INDISPONIBILE' | 'OCCUPATA' | 'ND';

export const TESSERE_STATUS_COLORS: Record<TesseraStatus, string> = {
  LIBERA: 'success',
  INDISPONIBILE: 'danger',
  OCCUPATA: 'warning',
  ND: 'secondary',
};

export const TESSERE_STATUS_MESSAGES = {
  LIBERA: 'libera',
  LIBERA_DESC: 'Libera',
  LIBERA_DESC_PLU: 'Libere',
  INDISPONIBILE: 'indisponibile',
  INDISPONIBILE_DESC: 'Indisponibile',
  INDISPONIBILE_DESC_PLU: 'Indisponibili',
  OCCUPATA: 'occupata',
  OCCUPATA_DESC: 'Occupata',
  OCCUPATA_DESC_PLU: 'Occupate',
  ND: 'n/d',
  ND_DESC: 'N/D',
};
