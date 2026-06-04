// app/services/user-settings.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSettings } from './../../interfaces/user-setting';
import { API_CONSTANTS } from './../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private http = inject(HttpClient);

  getUserSettings(): Observable<UserSettings> {
    return this.http.get<UserSettings>(
      `${API_CONSTANTS.BASE_URL}/user/settings`
    );
  }

  updateUserSettings(email: string, image?: File | null): Observable<UserSettings> {
    const formData = new FormData();

    formData.append('email', email);

    if (image) {
      formData.append('image', image);
    }

    return this.http.put<UserSettings>(
      `${API_CONSTANTS.BASE_URL}/user/settings`,
      formData
    );
  }
}
