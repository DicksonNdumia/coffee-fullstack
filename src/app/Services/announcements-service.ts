import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor(private http: HttpClient) {}

  getAllMeetings(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/meetings`);
  }

  getAllAnnouncements ():Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/announcements`);
  }

}
