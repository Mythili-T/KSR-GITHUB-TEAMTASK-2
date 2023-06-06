import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) {}
 postResume(body:any){
  return this.http.post("http://localhost:3000/resume", body)
}
}
