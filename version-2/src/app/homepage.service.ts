import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("usersuccess"));
  userloggedin(registernovalue: any, password: any) {
    throw new Error('Method not implemented.');
  }
  constructor() { }
  isUserLoggedIn(){
    return false;
  }

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
