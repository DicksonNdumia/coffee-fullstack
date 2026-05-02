import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinuteService {
  constructor(private http: HttpClient) {}

  getMinutes(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/minutes');
  }
}
