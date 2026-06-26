import { Persona } from './../../interfaces/persone';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from 'src/constants/api.constants';
import { ApiResponse } from 'src/interfaces/api-response';
import { DataGridState } from 'src/interfaces/datagrid';

@Injectable({
  providedIn: 'root',
})
export class PersoneService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  /**
   * GET - Get all tessere
   */
  getSedi(body: DataGridState): Observable<ApiResponse<Persona[]>> {
    return this.http.post<ApiResponse<Persona[]>>(`${this.apiUrl}/getDipartimentiServlet`,body);
  }
}
