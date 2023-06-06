import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterpageService {

  constructor(private http:HttpClient) { }
  addUser(body:any){
    return this.http.post("http://localhost:3000/registeruser",body);
  }
  getUser(){
    return this.http.get("http://localhost:3000/registeruser");
  }
  updateProfile(data:any,id:any){
    return this.http.patch(` http://localhost:3000/registeruser/${id}`,data)
   }
}
