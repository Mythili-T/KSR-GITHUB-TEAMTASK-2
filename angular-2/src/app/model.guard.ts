import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ModellingService } from './modelling.service';

@Injectable({
  providedIn: 'root'
})
export class ModelGuard implements CanActivate{
  constructor(private modellingService:ModellingService,private route:Router){ }
  canActivate()
    {
      if(sessionStorage.getItem("usersuccess")){
        return true;
      }
      else{
        window.alert('You are not logged in to view page');
        this.route.navigate(['loginnew']);
        return false;
      }


  }


}
