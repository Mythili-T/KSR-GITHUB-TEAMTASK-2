import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegserviceServiceService {
  constructor(private regclient:HttpClient) {

  }
  addReginfo(body:any){

   return this.regclient.post("http://localhost:3000/users",body);

  }
}
