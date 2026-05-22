import { API_CONSTANTS } from './../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Tessera } from './../../interfaces/tessere';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataGridRequest } from 'src/interfaces/datagrid';

@Injectable({
  providedIn: 'root'
})
export class TessereService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  /**
   * GET - Get all tessere
   */
  getTessere(body:DataGridRequest): Observable<Tessera[]> {
    return this.http.post<Tessera[]>(`${this.apiUrl}/getTessereListByFiltersServlet`,body);
  }

  /**
   * GET - Get single tessera by id
   */
  getTesseraById(id: string): Observable<Tessera> {
    return this.http.get<Tessera>(`${this.apiUrl}/getTesseraByIdTesseraServlet?idTessera=${id}`);
  }

  /**
   * POST - Create new tessere
   */
  createTessere(tessere: Array<Tessera>) {
    return this.http.post<Array<Tessera>>(`${this.apiUrl}/inserimentoTessereServlet`, tessere);
  }

  assegnaTessere(tessere: Array<Tessera>) {
    return this.http.post<Array<Tessera>>(`${this.apiUrl}/assegnaTessereServlet`, tessere);
  }

  /**
   * PUT - Update tessera
   */
  updateTessera(id: number, tessera: Partial<Tessera>): Observable<Tessera> {
    return this.http.put<Tessera>(`${this.apiUrl}/${id}`, tessera);
  }

  /**
   * DELETE - Remove tessera
   */
  deleteTessera(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
