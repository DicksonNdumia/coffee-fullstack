import { Component } from '@angular/core';
import { AnnouncementsService } from '../../../Services/announcements-service';

@Component({
  selector: 'app-announcements',
  imports: [],
  templateUrl: './announcements.html',
  styleUrl: './announcements.css',
})
export class Announcements {
  isLoading: boolean = true;
  announcementList: any[] = [];

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }
  loadAnnouncements() {
    try {
      this.announcementsService.getAllAnnouncements().subscribe((res: any) => {
        this.announcementList = res.data;
        // this.isLoading = false;
        //console.log("Announcements loaded", res.data);
      });
    } catch (e) {
      console.error(e);
      //this.isLoading = false;
    }
  }
}
