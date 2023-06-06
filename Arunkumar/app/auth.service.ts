import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("userSuccess"));

  constructor() { }
  get isUserLoggedIn(){
    return false;
  }
  get isUserRole(){
    return false;
  }

isLoggedIn=false;
login(){
 this.isLoggedIn=true;
 this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
}
logout(){
  this.isLoggedIn=false;
  this.isUserLogIn= Boolean(sessionStorage.getItem("userSuccess"));
 }

}
