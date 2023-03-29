import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  token = localStorage.getItem('token');
  headers = {
    'Authorization': 'Bearer ' + this.token,
  }
  constructor(private http : HttpClient) { }

  getFormateurs() {
    return this.http.get('http://localhost:8080/api/formateur', {headers: this.headers});
  }

  addFormateur(formateurData: any) {
    return this.http.post('http://localhost:8080/api/formateur', formateurData, {headers: this.headers});
  }

  updateFormateur(formateurData: any) {
    return this.http.put('http://localhost:8080/api/formateur', formateurData,  {headers: this.headers});
  }

  deleteFormateur(id: any) {
    console.log(id);
    return this.http.delete('http://localhost:8080/api/formateur/' + id, {headers: this.headers});
  }
}
