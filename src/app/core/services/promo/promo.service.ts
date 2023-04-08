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

  addPromo(promoData: any) {
    return this.http.post('http://localhost:8080/api/promo', promoData, {headers: this.headers});
  }

  updatePromo(promoData: any) {
    return this.http.put('http://localhost:8080/api/promo', promoData,  {headers: this.headers});
  }

  deletePromo(id: any) {
    console.log(id);
    return this.http.delete('http://localhost:8080/api/promo/' + id, {headers: this.headers});
  }
}
