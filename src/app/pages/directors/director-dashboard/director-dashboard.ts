import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth-service';

@Component({
  selector: 'app-director-dashboard',
  imports: [],
  templateUrl: './director-dashboard.html',
  styleUrl: './director-dashboard.css',
})
export class DirectorDashboard {
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
