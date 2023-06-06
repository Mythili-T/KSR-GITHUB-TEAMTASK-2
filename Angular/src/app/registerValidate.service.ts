import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidateService {
  constructor(private client:HttpClient) { }
  addUserInfo(data:any){
    return this.client.post("http://localhost:3000/users",data);
  }
  // getusername(): Observable<any>{
  //   return this.client.get<any>(this.url);
  // }
  getData(): Observable <any>{
    return this.client.get("http://localhost:3000/users");
   }

   updateUserInfo(data:any,id:any){
    return this.client.patch(`http://localhost:3000/users/${id}`,data);
  }
}

