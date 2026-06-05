import { API_CONSTANTS } from './../../constants/api.constants';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sede } from '../../interfaces/sedi';
import { DataGridRequest } from '../../interfaces/datagrid';

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
  getSedi(body: DataGridRequest): Observable<Sede[]> {
    return this.http.post<Sede[]>(`${this.apiUrl}/getDipartimentiServlet`,body);
  }

  getSediList(): Observable<Sede[]> {
    return this.http.get<Sede[]>(`${this.apiUrl}/getDipartimentiServlet`);
  }

}
