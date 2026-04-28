import { Component, inject } from '@angular/core';
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
    userName: '',
    password: '',
    emailId: '',
  };

  userLogin: any = {
    email: '',
    password: '',
  };

  onRegister() {}

  onLogin() {
    this.authService.onLogin(this.userLogin).subscribe((res: any) => {

      console.log("res", res);
      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigateByUrl('/dashboard');
    });
  }
}
