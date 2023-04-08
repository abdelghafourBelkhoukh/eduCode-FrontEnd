import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RenduService {

  token : any = localStorage.getItem("token")

  constructor(private http: HttpClient) { }

  createRendu(renduData: any) {
    return this.http.post('http://localhost:8080/api/rendu', renduData, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  getStudentIdByEmail() {
    const userInfo = this.getUserInfo();
    console.log(userInfo.username);
    return this.http.get('http://localhost:8080/api/student/id/'+ userInfo.username, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  getUserInfo() {
    const token = localStorage.getItem("token");
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      console.log(JSON.parse(payload));
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  getRenduByStudentId(id: any) {
    return this.http.get('http://localhost:8080/api/rendu/student/'+id, {headers: {'Authorization': 'Bearer ' + this.token}});
  }
}
