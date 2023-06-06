import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-leave-holiday',
  templateUrl: './leave-holiday.component.html',
  styleUrls: ['./leave-holiday.component.css']
})
export class LeaveHolidayComponent implements OnInit {

 holiday: any;
  constructor( private service:HttpDbService,private fb:FormBuilder)  {
    this.service.  getTime().subscribe((data: any)=>{
      this.holiday=data;
    }  )
  }

  ngOnInit() {
  }

}
