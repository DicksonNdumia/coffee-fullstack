import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  logout() {
    const isLocalData = localStorage.getItem('angular18local');
   if (isLocalData) {
     const users = JSON.parse(isLocalData);
     const reset = localStorage.clear();
   }
  }
}
