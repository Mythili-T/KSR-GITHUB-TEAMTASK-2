import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

constructor(private http:HttpClient) { }
  getUserList():Observable<any>{
    return this.http.get("http://localhost:3000/registeruser");
  }

}
