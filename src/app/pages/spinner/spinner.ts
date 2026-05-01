import { Component, inject } from '@angular/core';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Loading } from '../../Services/loading';

@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner {
  service = inject(Loading);

}
