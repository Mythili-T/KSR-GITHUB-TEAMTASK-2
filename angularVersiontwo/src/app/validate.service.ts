import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService
{

  constructor(private client:HttpClient) { }
  addUserInfo(data:any){
    return this.client.post("http://localhost:3000/users",data);
  }
  addPersonalInfo(data:any){
    return this.client.post("http://localhost:3000/personalInfo",data);
  }
  addAccountInfo(data:any){
   return this.client.post("http://localhost:3000/account",data);
  }
getData(): Observable <any>{
 return this.client.get("http://localhost:3000/users");
}
getPersonalInfo():Observable<any>{
  return this.client.get("http://localhost:3000/personalInfo");
}
updateuserInfo(data:any,id:any){
  return this.client.patch(`http://localhost:3000/users/${id}`,data);
}

}
