import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Login/Login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  userName: string = '';
  constructor() {}
  // login(namevalue: string, password: string) {
  //   this.userName = namevalue;
  //   this.isLoggedIn = true;
  //   return of(this.isLoggedIn);
  // }
  // onLogin(): boolean{
  //   return this.isLoggedIn;
  // }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn=Boolean(sessionStorage.getItem('userLogin'));
  }

  isAdminUser(): boolean {
    console.log('un' + this.userName);
    if (this.userName == 'admin') {
      return true;
    }
    return false;
  }
  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
