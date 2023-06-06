import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  details:any;
  constructor(private service:ValidateService,private route:Router) { }
  
  ngOnInit() {
    this.service.getData().subscribe(res =>{
      this.details=res;
    })
  }



}
