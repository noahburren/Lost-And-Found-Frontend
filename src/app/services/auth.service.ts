import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'lostfound_token';

  constructor(private http: HttpClient) {}

  // --- LOGIN ---
  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${environment.backendUrl}/auth/login`,
      { email, password },
      {
        responseType: 'text',    // Backend gibt Token als plain text zurück
        headers
      }
    ).pipe(
      tap(token => {
        localStorage.setItem(this.TOKEN_KEY, token);
      })
    );
  }

  // --- SIGNUP ---
  signup(name: string, email: string, password: string) {
    return this.http.post(
      `${environment.backendUrl}/users/signup`,
      { name, email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  // --- TOKEN VERWALTUNG ---
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
