import { Component, OnInit } from '@angular/core';
import { NewRegisterService } from '../Register/New-Register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminViewUser',
  templateUrl: './AdminViewUser.component.html',
  styleUrls: ['./AdminViewUser.component.css']
})
export class AdminViewUserComponent implements OnInit {
  data:any;
  constructor(private admin:NewRegisterService,private route:Router ) { }

  ngOnInit() {
    this.admin.getAdmin().subscribe(show=>{
      this.data=show;
    })
  }


}
