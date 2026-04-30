import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, ) {}

  register(obj: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/register`, obj);
  }
  onLogin(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/auth/login', obj);
  }

  isAuthenticated():boolean {
    const token = localStorage.getItem("accessToken");
    return !!token;
  }

  getUserRole(): string {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role_id;
    }
    return '';
  }
  getUser() {
    const userData = localStorage.getItem("currentUser");
    return userData ? JSON.parse(userData) : null;
  }

















}
