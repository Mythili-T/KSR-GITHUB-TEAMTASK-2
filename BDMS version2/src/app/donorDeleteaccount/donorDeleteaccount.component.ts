import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterformService } from '../registerform.service';

@Component({
  selector: 'app-donorDeleteaccount',
  templateUrl: './donorDeleteaccount.component.html',
  styleUrls: ['./donorDeleteaccount.component.css'],
})
export class DonorDeleteaccountComponent implements OnInit {
  loggedInUser: any;
  showDialog: boolean = false;
  confirmationText: string = '';

  constructor(
    private registerService: RegisterformService,
    private router: Router
  ) {}

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.registerService.loggedInUser !== null) {
      this.loggedInUser = this.registerService.loggedInUser;
    } else {
      alert('Sorry!. You are Delete your Account');
      this.router.navigate(['/login']);
    }
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  confirmDelete() {
    confirm(
      'Your decision to delete your account means we will lose out on potential life-saving opportunities for those in need.'
    );
    const expectedConfirmationText = 'I want to delete my account';
    if (this.confirmationText === expectedConfirmationText) {
      this.registerService.deleteUser(this.loggedInUser.id).subscribe(() => {
        alert('Your account is deleted');
        this.registerService.loggedInUser = null;
        sessionStorage.removeItem('loggedInUser');
        this.router.navigate(['/home']);
      });
    } else {
      alert('Write the correct content..!');
    }
    this.showDialog = false;
    this.confirmationText = '';
  }
  deleteAccount() {
    confirm('Are you sure to delete your account?');
    confirm(
      'Your decision to delete your account means we will lose out on potential life-saving opportunities for those in need.'
    );
    alert('Your account is deleted');
    this.registerService.deleteUser(this.loggedInUser.id).subscribe(() => {
      this.registerService.loggedInUser = '';
      this.router.navigate(['/home']);
    });
  }
}
