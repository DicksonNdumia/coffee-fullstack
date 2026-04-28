import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(obj: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/register`, obj);
  }
  onLogin(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/auth/login', obj);
  }
}
