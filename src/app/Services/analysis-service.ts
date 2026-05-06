import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  constructor(private http: HttpClient) {}

  getAnalysis(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/analysis/admin');
  }
}
