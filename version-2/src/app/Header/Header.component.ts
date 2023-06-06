import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from '../homepage.service';
import { HeaderGuard } from '../header.guard';
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  usersuccess=false;
  constructor(private route:Router,private homepageservice:HomepageService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.homepageservice.userlogin
   }
  ngOnInit() {
  }
  logout(){
    this.homepageservice.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
    this.route.navigate(['Indexpage'])
}
}
