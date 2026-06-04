// app/services/auth.service.ts

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { API_CONSTANTS } from 'src/constants/api.constants';
import { Router } from '@angular/router';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private loggedInSignal = signal<boolean>(!!localStorage.getItem('token'));
  loggedIn = this.loggedInSignal.asReadonly();

  login(credentials: LoginRequest): Observable<LoginResponse> {
    if (API_CONSTANTS.MOCK_LOGIN) {
      return of({
        token: 'mock-jwt-token'
      }).pipe(
        tap(response => this.saveToken(response.token))
      );
    }

    return this.http
      .post<LoginResponse>(`${API_CONSTANTS.BASE_URL}/auth/login`, credentials)
      .pipe(
        tap(response => this.saveToken(response.token))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSignal.set(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedInSignal();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedInSignal.set(true);
  }
}
