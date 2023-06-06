import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { LoginComponent } from './Login/Login.component';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router,) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.loginService.isUserLoggedIn()) {
      alert('Please Login to Access');
      this.router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;
    }
    return true;
  }
}
