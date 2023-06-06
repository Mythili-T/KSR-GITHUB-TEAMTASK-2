import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModellingService {
  userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("usersuccess"));
  constructor() { }
  // get isUserLoggedIn(){
  //   return false;
  // }
  // get isUserRole(){
  //   return false;
  // }
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }

  logout() {
    this.isLoggedIn = false;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }
}
