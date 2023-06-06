import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeddingsService {


constructor(public http:HttpClient,private client:HttpClient) { }
getProducts(){
  return this.http.get("http://localhost:3000/weddings")
}

//ADMIN PAGE TO VIEW PRODUCTS
getProductAdmin():Observable<any>{
  return this.client.get('http://localhost:3000/weddings')
  }
}
