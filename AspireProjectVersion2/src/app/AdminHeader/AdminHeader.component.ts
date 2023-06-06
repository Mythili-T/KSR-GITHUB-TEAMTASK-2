import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';

@Component({
  selector: 'app-AdminHeader',
  templateUrl: './AdminHeader.component.html',
  styleUrls: ['./AdminHeader.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit() {
  }
  onLogout(){
    this.loginService.onLogout();

  }
}
