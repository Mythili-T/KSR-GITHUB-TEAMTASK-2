import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // details:any;
  // constructor(private service:ValidateService,private route:Router) { }

  // ngOnInit() {
  //   this.service.getData().subscribe(res =>{
  //     this.details=res;
  //   })
  // }

}
