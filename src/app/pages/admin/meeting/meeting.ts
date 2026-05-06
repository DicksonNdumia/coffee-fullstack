import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../../Services/announcements-service';
import { Spinner } from '../../spinner/spinner';

@Component({
  selector: 'app-meeting',
  imports: [Spinner],
  templateUrl: './meeting.html',
  styleUrl: './meeting.css',
})
export class Meeting implements OnInit {
  meetingList: any[] = [];
  isLoading: boolean = true;

  constructor(private announcementsService: AnnouncementsService) {}
  ngOnInit(): void {
    this.loadMeetings();
  }

  loadMeetings() {
    try {
      this.announcementsService.getAllMeetings().subscribe((res: any) => {
        this.meetingList = res.data;
        //this.isLoading = false;
      });
    } catch (e) {
      console.error(e);
      //this.isLoading = false;
    }
  }
}
