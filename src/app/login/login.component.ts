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
      console.log(response);
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.loginService.loggedIn = true;
        switch (response.role) {
          case 'PLATFORM_ADMIN':
            localStorage.setItem('role', response.role);
            this.route.navigate(['/']);
            break;
          case 'SCHOOL':
            localStorage.setItem('role', response.role);
            this.route.navigate(['/']);
            break;
          case 'SCHOOL_ADMIN':
            localStorage.setItem('role', response.role);
            this.route.navigate(['/']);
            break;
          case 'FORMATEUR':
            localStorage.setItem('role', response.role);
            this.route.navigate(['/']);
            break;
          case 'STUDENT':
            localStorage.setItem('role', response.role);
            this.route.navigate(['/']);
            break;
          default:
            window.location.href = '/login';
        }
      }
    });
  }
}
