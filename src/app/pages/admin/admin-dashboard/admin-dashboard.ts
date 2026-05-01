import { Component, OnInit } from '@angular/core';
import { Announcements } from '../announcements/announcements';
import { Users } from '../users/users';
import { Analysis } from '../analysis/analysis';
import { Meeting } from '../meeting/meeting';
import { Minutes } from '../minutes/minutes';
import { Seasons } from '../seasons/seasons';
import { Payment } from '../payment/payment';
import { AuthService } from '../../../Services/auth-service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-admin-dashboard',
  imports: [Announcements, Users, Analysis, Meeting, Minutes, Seasons, Payment, CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  currentComponent: string = 'Announcements';
  constructor(private authService: AuthService) {}
  userData: any;

  ngOnInit() {
    this.userData = this.getUser();
  }

  getUser(): any {
    const user: any = this.authService.getUser();
    return user;
  }

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
  }
}
