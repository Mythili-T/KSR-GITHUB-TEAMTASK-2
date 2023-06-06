import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegcredService {

  constructor(private dbservice:HttpClient) {

  }
  addReg(regdb:any){

    return this.dbservice.post("http://localhost:3000/studentlogin",regdb);

   }


}
