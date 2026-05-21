import { API_CONSTANTS } from './../../constants/api.constants';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sede } from '../interfaces/Sedi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SediService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  /**
   * GET - Get all tessere
   */
  getTessere(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.apiUrl);
  }

  /**
   * GET - Get single Sede by id
   */
  getSedeById(id: number): Observable<Sede> {
    return this.http.get<Sede>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST - Create new Sede
   */
  createTessere(tessere: Array<Sede>) {
    return this.http.post<Array<Sede>>(this.apiUrl, tessere);
  }

  /**
   * PUT - Update Sede
   */
  updateSede(id: number, Sede: Partial<Sede>): Observable<Sede> {
    return this.http.put<Sede>(`${this.apiUrl}/${id}`, Sede);
  }

  /**
   * DELETE - Remove Sede
   */
  deleteSede(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
