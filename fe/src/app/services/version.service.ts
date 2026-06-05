import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VersionInfo } from '../../interfaces/version-info';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) {}

  getVersion(): Observable<VersionInfo> {
    return this.http.get<VersionInfo>('assets/version.json');
  }
}
