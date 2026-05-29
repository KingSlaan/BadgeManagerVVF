import { API_CONSTANTS } from './../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Tessera, Tessere } from './../../interfaces/tessere';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataGridRequest } from 'src/interfaces/datagrid';

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
    return this.http.get<Tessera[]>(`${this.apiUrl}/TesseraCronology/${id}`);
  }

  createTessere(tessere: Array<Tessera>) {
    return this.http.post<Array<Tessera>>(`${this.apiUrl}/inserimentoTessereServlet`, tessere);
  }

  assegnaTessera(tessere: any) {
    return this.http.post<Tessera>(`${this.apiUrl}/assegnaTessereServlet`, tessere);
  }

  updateTessera(id: number, tessera: Partial<Tessera>): Observable<Tessera> {
    return this.http.put<Tessera>(`${this.apiUrl}/${id}`, tessera);
  }

  revocaTessera(id: string, tessera: any): any {
    return this.http.put<Tessera>(`${this.apiUrl}/RevocaTessera/${id}`, tessera);
  }

  invalidaTessera(id: string, tessera: any): any {
    return this.http.put<Tessera>(`${this.apiUrl}/InvalidaTessera/${id}`, tessera);
  }

  /**
   * DELETE - Remove tessera
   */
  // deleteTessera(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
