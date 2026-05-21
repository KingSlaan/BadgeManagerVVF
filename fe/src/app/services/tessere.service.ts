import { HttpClient } from '@angular/common/http';
import { Tessera } from './../interfaces/tessere';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TessereService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = 'https://api.example.com';

  /**
   * GET - Get all tessere
   */
  getTessere(): Observable<Tessera[]> {
    return this.http.get<Tessera[]>(this.apiUrl);
  }

  /**
   * GET - Get single tessera by id
   */
  getTesseraById(id: number): Observable<Tessera> {
    return this.http.get<Tessera>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST - Create new tessera
   */
  createTessere(tessere: Array<Tessera>) {
    return this.http.post<Array<Tessera>>(this.apiUrl, tessere);
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
