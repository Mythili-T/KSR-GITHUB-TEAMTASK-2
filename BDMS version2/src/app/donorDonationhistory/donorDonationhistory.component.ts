import { Component, OnInit } from '@angular/core';
import { RegisterformService } from '../registerform.service';


@Component({
  selector: 'app-donorDonationhistory',
  templateUrl: './donorDonationhistory.component.html',
  styleUrls: ['./donorDonationhistory.component.css']
})
export class DonorDonationhistoryComponent implements OnInit {
  loggedInUser: any;

  constructor(private registerformService:RegisterformService) { }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.registerformService.loggedInUser !== null) {
      this.loggedInUser = this.registerformService.loggedInUser;
    }
  }

}
