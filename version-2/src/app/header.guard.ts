import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomepageService } from './homepage.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderGuard implements CanActivate {
  constructor(private authenticationService: HomepageService, private route: Router) { }

  canActivate() {
    if (sessionStorage.getItem("usersuccess")) {
      return true;
    }
    else {
      window.alert('Please Login to view the page ');
      this.route.navigate(['Loginpage']);
      return false;
    }
  }
}
