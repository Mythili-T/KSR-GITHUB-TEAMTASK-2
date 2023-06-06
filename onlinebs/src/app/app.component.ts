import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinebs';
  showLogin!:boolean;
  showLogout!:boolean;
  userLogin:boolean|undefined
  constructor( private service: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http:HttpClient,
    private guard:AuthGuard

    ){
      this.userLogin=Boolean(sessionStorage.getItem('userLogin'));
    }
    logOut(){
      alert("Your account Is Logging Out")
      this.userLogin=false;
      sessionStorage.clear();
      location.reload();
    }


}
