import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 isLoggedin=false;
constructor() { }
   onLogin(){
     this.isLoggedin=true;
   }
   onLogout(){
    this.isLoggedin=false;
  
   }

}

