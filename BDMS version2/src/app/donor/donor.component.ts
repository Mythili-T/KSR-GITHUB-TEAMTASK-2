import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegisterformService } from '../registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  donorId: any;
  loggedInUser: any;
  visible: boolean = true;

  constructor(
    private registerformService: RegisterformService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.registerformService.loggedInUser !== null) {
      this.loggedInUser = this.registerformService.loggedInUser;
    } else {
      alert('You are Loggedout or your account was deleted.');
      this.router.navigate(['/login']);
    }
    console.log(this.loggedInUser.id);
  }

  logout() {
    confirm('Are you sure to logout');

    this.registerformService.loggedInUser = null;

    sessionStorage.removeItem('loggedInUser');
    alert('You are logout succussfully');
    this.router.navigate(['/home']);
  }
}
