import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Emp_Header',
  templateUrl: './Emp_Header.component.html',
  styleUrls: ['./Emp_Header.component.css']
})
export class Emp_HeaderComponent implements OnInit {

  constructor() { }
loginID:any='';
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
    }
  }

}
