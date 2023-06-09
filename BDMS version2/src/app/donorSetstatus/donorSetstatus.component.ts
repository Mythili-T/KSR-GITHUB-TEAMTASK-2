import { Component, OnInit } from '@angular/core';
import { RegisterformService } from '../registerform.service';


@Component({
  selector: 'app-donorSetstatus',
  templateUrl: './donorSetstatus.component.html',
  styleUrls: ['./donorSetstatus.component.css']
})
export class DonorSetstatusComponent implements OnInit {
  selectedAvailability: string = '';
  loggedInUser:any;
  constructor(private registerformService:RegisterformService) { }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    }
  }
  updateAvailability() {
    const data = { setStatus : this.selectedAvailability };
    this.registerformService.availability(data,this.loggedInUser.id).subscribe(() => {
    });
   
  }
}
