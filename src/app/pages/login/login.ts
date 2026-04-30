import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  isLoginView: boolean = true;

  userRegisterObj: any = {
    name: '',
    email: '',
    password: '',
    location: '',
    county: '',
    phone_number: '',
    role_id: [1, 2, 3],
    date_of_birth: new Date(),
  };

  userLogin: any = {
    email: '',
    password: '',
  };

  onRegister() {
    this.authService.register(this.userRegisterObj).subscribe((res: any) => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.isLoginView = true;
    });
  }

  onLogin() {
    this.authService.onLogin(this.userLogin).subscribe((res: any) => {
      //console.log('res', res);
      localStorage.setItem('accessToken', res.accessToken);
      //console.log(res.user);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      if(res.user.role_id === 1) {
       this.router.navigateByUrl('/admin-dashboard')
      }
      else if (res.user.role_id === 2) {

        this.router.navigateByUrl('/directors');
      }
      else if(res.user.role_id === 3) {
        this.router.navigateByUrl('/user');
      }
    });
  }
}

