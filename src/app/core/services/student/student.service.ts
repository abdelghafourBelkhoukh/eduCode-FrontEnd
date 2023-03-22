import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getExams() {
    return this.http.get('http://localhost:8080/api/examan', {headers: {'Authorization': 'Bearer ' + this.token}});
  }
}
