import { Component,  } from '@angular/core';
import { AnnouncementsService } from '../../../Services/announcements-service';

import { CommonModule } from '@angular/common';
import { Spinner } from '../../spinner/spinner';




@Component({
  selector: 'app-announcements',
  imports: [CommonModule, Spinner],
  templateUrl: './announcements.html',
  styleUrl: './announcements.css',
})
export class Announcements {
  announcementList: any;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }
  loadAnnouncements() {
    try {
      this.announcementsService.getAllAnnouncements().subscribe((res: any) => {
        this.announcementList = res.data;
      });
    } catch (e) {
      console.error(e);
    }
  }
}
