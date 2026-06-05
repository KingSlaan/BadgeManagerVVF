import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistiche, StatisticheSedeChart } from './../../interfaces/statistiche';
import { API_CONSTANTS } from '../../constants/api.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);

  // Example base API URL
  private apiUrl = API_CONSTANTS.BASE_URL;

  /**
   * GET - Get all tessere
   */
  getStatistiche(): Observable<Statistiche[]> {
    return this.http.get<Statistiche[]>(`${this.apiUrl}/getStatisticheTessere`);
  }

  getStatisticheSede(): Observable<StatisticheSedeChart> {
    return this.http.get<StatisticheSedeChart>(`${this.apiUrl}/getConteggioTessereSedi`);
  }
}
