import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../core/services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined ;
  password: string | undefined;
  selectedRole: string | undefined;

  constructor(private loginService: LoginService, private route: Router) {}


  login() {
    console.log(this.email, this.password, this.selectedRole);
    this.loginService.login(this.email, this.password, this.selectedRole).subscribe((response: any) => {
      if (response.token) {
        this.loginService.loggedIn = true;
        localStorage.setItem('token', response.token);
        switch (response.role) {
          case 'PLATFORM_ADMIN':
            localStorage.setItem('role', response.role);
            window.location.href = '/platform-admin';
            break;
          case 'SCHOOL':
            localStorage.setItem('role', response.role);
            window.location.href = '/school';
            break;
          case 'SCHOOL_ADMIN':
            localStorage.setItem('role', response.role);
            window.location.href = '/school-admin';
            break;
          case 'FORMATEUR':
            localStorage.setItem('role', response.role);
            window.location.href = '/formateur';
            break;
          case 'STUDENT':
            localStorage.setItem('role', response.role);
            this.route.navigate(['student']);
            break;
          default:
            window.location.href = '/login';
        }
      }
    });
  }
}
