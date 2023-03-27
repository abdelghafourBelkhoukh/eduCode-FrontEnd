import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {

  token: any = localStorage.getItem('token');
  headers = {
    'Authorization': 'Bearer ' + this.token,
  }

  constructor(private http : HttpClient) { }

  getSchoolAdmins() {
    return this.http.get('http://localhost:8080/api/school-admin', {headers: this.headers});
  }

  addSchoolAdmin(schoolAdminData: any) {
    return this.http.post('http://localhost:8080/api/school-admin', schoolAdminData, {headers: this.headers});
  }


  deleteSchoolAdmin(id: any) {
    console.log(id);
    return this.http.delete('http://localhost:8080/api/school-admin/' + id, {headers: this.headers});
  }

  updateSchool(schoolAdminData: any) {
    return this.http.put('http://localhost:8080/api/school-admin', schoolAdminData,  {headers: this.headers});
  }
}
