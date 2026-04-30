import { Component } from '@angular/core';

import { AuthService } from '../../../Services/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {
  constructor(private authService: AuthService) {}
  userData: any;

  ngOnInit() {
    this.userData = this.getUser();
  }

  getUser(): any {
    const user: any = this.authService.getUser();
    return user;
  }
}
