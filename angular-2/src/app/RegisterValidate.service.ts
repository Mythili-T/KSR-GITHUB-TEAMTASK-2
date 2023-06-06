import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidateService {

constructor(private client:HttpClient) { }
 addRegister(data:any){
  return this.client.post("http://localhost:3000/Register",data);
 }
}
