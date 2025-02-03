// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Utilise le port et l'URL appropriés pour ton backend
  private apiUrl = 'http://localhost:4200/api/auth';

  constructor(private http: HttpClient) { }

  // Méthode d'inscription (récupère un objet utilisateur)
  register(user: { username: string; password: string; role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Méthode de connexion : accepte username et password
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Stocke le rôle dans localStorage
  setUserRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }
}
