import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  token = localStorage.getItem('token');
  headers = {
    'Authorization': 'Bearer ' + this.token,
  }

  constructor(private http : HttpClient) { }

  getPromos() {
    return this.http.get('http://localhost:8080/api/promo', {headers: this.headers});
  }
}
