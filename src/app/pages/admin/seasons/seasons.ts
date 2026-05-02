import { Component, inject, OnInit } from '@angular/core';
import { SeasonService } from '../../../Services/season-service';
import { Spinner } from '../../spinner/spinner';


@Component({
  selector: 'app-seasons',
  imports: [Spinner],
  templateUrl: './seasons.html',
  styleUrl: './seasons.css',
})
export class Seasons implements OnInit {
  seasons: any[] = [];
  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.loadSeasons();
  }

  loadSeasons() {
    try {
      this.seasonService.getSeasons().subscribe((res: any) => {
        this.seasons = res.data;
        //console.log(this.seasons);
      });
    } catch (e) {
      console.log(e);
      alert('Api Error');
    }
  }


}
