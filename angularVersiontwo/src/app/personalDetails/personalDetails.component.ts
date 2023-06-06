import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-personalDetails',
  templateUrl: './personalDetails.component.html',
  styleUrls: ['./personalDetails.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor( private route:Router ,private service:ValidateService) { }
  details:any;
  ngOnInit() {
    this.service.getPersonalInfo().subscribe(res =>{
      this.details=res;
    })
  }

}
