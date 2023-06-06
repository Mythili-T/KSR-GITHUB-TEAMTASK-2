import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewRegisterService {

constructor(private client:HttpClient) { }
addUserInfo(data:any){
  return this.client.post("http://localhost:3000/users",data);

}
getAdmin():Observable<any>{
  return this.client.get('http://localhost:3000/users')
  }
}
