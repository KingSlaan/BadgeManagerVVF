import { API_CONSTANTS } from './../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Tessera, Tessere } from './../../interfaces/tessere';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataGridRequest } from './../../interfaces/datagrid';

@Injectable({
  providedIn: 'root'
})
export class TessereService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  getTessere(body: DataGridRequest): Observable<Tessera[]> {
    return this.http.post<Tessera[]>(`${this.apiUrl}/getTessereListByFiltersServlet`, body);
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

  assegnaTessera(id: string,tessere: any) {
    return this.http.post<Tessera>(`${this.apiUrl}/assegnaTesseraServlet`, tessere);
  }

  cambiaSedeTessera(id: string,tessere: any) {
    return this.http.post<Tessera>(`${this.apiUrl}/assegnaTesseraServlet`, tessere);
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

  /**
   * DELETE - Remove tessera
   */
  // deleteTessera(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
