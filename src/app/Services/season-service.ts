import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeasonService {
  constructor(private http: HttpClient) {}

  addSeason(obj: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/season', obj);
  }
  getSeasons(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/season');
  }

  getSeasonsByYear(year: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/season/year/${year}`);
  }

  updateSeasonPricing(year: number, obj: any): Observable<any> {
    return this.http.patch(`http://localhost:3000/api/v1/season/${year}`, obj);
  }

  closeSeason(year: number, obj: any): Observable<any> {
    return this.http.patch(`http://localhost:3000/api/v1/season/close/${year}`, obj);
  }
}
