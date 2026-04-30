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



  constructor(private announcementsService: AnnouncementsService,) { }

  ngOnInit(): void {
   this.loadMeetings();

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




}
