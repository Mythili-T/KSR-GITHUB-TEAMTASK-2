import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaterService {

constructor(private http:HttpClient,private client:HttpClient) { }
getProducts(){
  return this.http.get("http://localhost:3000/cater")
}

//ADMIN PAGE TO VIEW PRODUCTS
getProductStudioAdmin():Observable<any>{
  return this.client.get('http://localhost:3000/cater')
  }
}

