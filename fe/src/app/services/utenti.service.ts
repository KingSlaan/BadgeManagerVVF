import { Utente } from './../../interfaces/utenti';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from 'src/constants/api.constants';
import { DataGridState } from 'src/interfaces/datagrid';

@Injectable({
  providedIn: 'root',
})
export class UtentiService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  /**
   * GET - Get all tessere
   */
  getUtenti(body: DataGridState): Observable<Utente[]> {
    return this.http.post<Utente[]>(`${this.apiUrl}`, body);
  }
}
