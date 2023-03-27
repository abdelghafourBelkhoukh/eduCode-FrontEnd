import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  token: any = localStorage.getItem('token');
  headers = {
    'Authorization': 'Bearer ' + this.token,
  }

  constructor(private http: HttpClient) {
  }

  getSchools() {
    return this.http.get('http://localhost:8080/api/school', {headers: this.headers});
  }

  addSchool(schoolData: any) {
    return this.http.post('http://localhost:8080/api/school', schoolData, {headers: this.headers});
  }

  deleteSchool(id: any) {
    return this.http.delete('http://localhost:8080/api/school/' + id, {headers: this.headers});
  }

  updateSchool(schoolData: any) {
    return this.http.put('http://localhost:8080/api/school', schoolData,  {headers: this.headers});
  }
}
