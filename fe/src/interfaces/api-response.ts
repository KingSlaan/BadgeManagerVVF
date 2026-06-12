export interface ApiResponse<T> {
  esito: string;
  messaggio: string;
  data: T;
}
