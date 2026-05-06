import { Component } from '@angular/core';
import { Spinner } from '../../spinner/spinner';

@Component({
  selector: 'app-payment',
  imports: [Spinner],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {}
