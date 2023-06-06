import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModellingService } from '../modelling.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // loginForms: any;
  // userlogin:any;
  usersuccess=false;
  constructor(private route:Router,private modellingService:ModellingService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.modellingService.userlogin
   }

  ngOnInit() {
    

  }

  logout(){
    this.modellingService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();

    this.route.navigate(['Home']);

  }

}
