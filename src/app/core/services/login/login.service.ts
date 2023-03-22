import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = localStorage.getItem('token') != null;

  constructor(private httpClient: HttpClient) { }

  login(email: string | undefined, password: string | undefined, role: string | undefined) {
    return this.httpClient.post('http://localhost:8080/api/auth/login', {email, password, role});
  }
}
