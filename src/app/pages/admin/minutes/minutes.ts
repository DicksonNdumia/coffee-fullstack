import { Component, OnInit } from '@angular/core';
import { MinuteService } from '../../../Services/minute-service';
import { Spinner } from '../../spinner/spinner';

@Component({
  selector: 'app-minutes',
  imports: [Spinner],
  templateUrl: './minutes.html',
  styleUrl: './minutes.css',
})
export class Minutes implements OnInit {
  minutes: any[] = [];

  constructor(private minutesService: MinuteService) {}

  ngOnInit(): void {
    this.loadMinutes()
  }

  loadMinutes(): void {
    try {
      this.minutesService.getMinutes().subscribe((res: any) => {
        this.minutes = res.data;
        console.log(this.minutes);
      });
    } catch (error) {
      console.log(error);
      alert('Api Error');
    }
  }
}
