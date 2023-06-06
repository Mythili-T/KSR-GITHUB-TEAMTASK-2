import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/Homepage/Homepage.component';
import { HomepageService } from 'src/app/homepage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
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
