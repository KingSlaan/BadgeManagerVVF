import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VersionInfo, VersionInfoBE } from '../../interfaces/version-info';
import { API_CONSTANTS } from 'src/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) { }

  private apiUrl = API_CONSTANTS.BASE_URL;

  getVersion(): Observable<VersionInfo> {
    return this.http.get<VersionInfo>('assets/version.json');
  }

  getVersionBE(): Observable<VersionInfoBE> {
    return this.http.get<any>(`${this.apiUrl}/getVersion`);
  }

}
