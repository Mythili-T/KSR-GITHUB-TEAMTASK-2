import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  success=false;

  constructor(public service:AuthService, private route:Router) {
    this.success=Boolean(sessionStorage.getItem("success"))||this.service.userlogin
  }
  logout(){
    this.service.userlogin=false;
    this.success=false;
    sessionStorage.clear();
    this.route.navigate(['/home']);
  }

  ngOnInit() {
  }

}
