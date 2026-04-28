import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../Services/announcements-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  meetingList: any[] = [];
  isLoading: boolean = true;
  announcementList: any[] = [];
  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
   this.loadMeetings();
   this.loadAnnouncements();
  }

  loadMeetings() {
   try {
     this.announcementsService.getAllMeetings().subscribe((res: any) => {

       this.meetingList = res.data;
       this.isLoading = false;
     });
   }
   catch (e) {
     console.error(e);
     this.isLoading = false;
   }
  }

  loadAnnouncements() {
    try {
      this.announcementsService.getAllAnnouncements().subscribe((res: any) => {
        this.announcementList = res.data;
        this.isLoading = false;
        //console.log("Announcements loaded", res.data);
      });
    }
    catch (e) {
      console.error(e);
      this.isLoading = false;
    }
  }
}
