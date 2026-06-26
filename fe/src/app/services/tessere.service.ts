import { API_CONSTANTS } from './../../constants/api.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicaAssegnazioneBody, AssegnazioneBody, Dipendente, Tessera, Tessere, TessereMassiva } from './../../interfaces/tessere';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataGridState } from './../../interfaces/datagrid';
import { ApiResponse } from '../../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class TessereService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  getTessere(body: DataGridState): Observable<ApiResponse<Tessera[]>> {
    return this.http.post<ApiResponse<Tessera[]>>(`${this.apiUrl}/getTessereListByFiltersServlet`, body);
  }

  getTesseraById(id: string): Observable<Tessera> {
    return this.http.get<Tessera>(`${this.apiUrl}/getTesseraByIdTesseraServlet?idTessera=${id}`);
  }

  getTessereHistory(id: string): Observable<Tessera[]> {
    return this.http.get<Tessera[]>(`${this.apiUrl}/tesseraCronology/${id}`);
  }

  createTessere(tessere: Array<Tessera>) {
    return this.http.post<Array<Tessera>>(`${this.apiUrl}/inserimentoTessereServlet`, tessere);
  }

  assegnaTessera(id: string, tessere: any) {
    return this.http.post<Tessera>(`${this.apiUrl}/assegnaTesseraServlet`, tessere);
  }

  cambiaSedeTessera(id: string, tessere: any) {
    return this.http.post<Tessera>(`${this.apiUrl}/cambiaSedeServlet`, tessere);
  }

  updateTessera(id: string, tessera: Partial<Tessera>): Observable<Tessera> {
    return this.http.put<Tessera>(`${this.apiUrl}/${id}`, tessera);
  }

  revocaTessera(id: string, tessera: any): any {
    return this.http.put<Tessera>(`${this.apiUrl}/revocaTessera/${id}`, tessera);
  }

  invalidaTessera(id: string, tessera: any): any {
    return this.http.put<Tessera>(`${this.apiUrl}/invalidaTessera/${id}`, tessera);
  }

  modificaMassivo(body: TessereMassiva): any {
    return this.http.put<Tessera>(`${this.apiUrl}/modificaTessereMassivo`, body);
  }

  stampaTessere(dipendentiSelezionati: any[], formato: string): Observable<HttpResponse<Blob>> {
    const payload = dipendentiSelezionati.map(d => ({
      nome: d.nome,
      cognome: d.cognome
    }));

    return this.http.post(
      `${this.apiUrl}/stampaBadgeServlet?formato=${formato}`,
      payload,
      {
        observe: 'response',
        responseType: 'blob'
      }
    );
  }

  downloadTemplate() {
    return this.http.get(`${this.apiUrl}/downloadTemplateExcel`, {
      responseType: 'blob'
    });
  }

  importExcel(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ApiResponse<Dipendente[]>>(`${this.apiUrl}/validaAnagraficaMassiva`, formData);
  }

  importTessereExcel(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ApiResponse<Tessera[]>>(`${this.apiUrl}/ricercaTessereDaExcel`, formData);
  }

  proponiAssegnazioni(body: AssegnazioneBody) {
    return this.http.post<ApiResponse<Tessera[]>>(`${this.apiUrl}/proponiAssegnazioniMassive`, body);
  }

  confermaAssegnazioni(body: ApplicaAssegnazioneBody) {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/assegnaTessereMassivo`, body);
  }

  /**
   * DELETE - Remove tessera
   */
  // deleteTessera(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
