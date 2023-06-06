import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-admin_leave',
  templateUrl: './admin_leave.component.html',
  styleUrls: ['./admin_leave.component.css']
})
export class Admin_leaveComponent implements OnInit {
  feesstatus: any;

  constructor(private fb:FormBuilder,private http:HttpDbService) {
    this.http. getattendanceinfo().subscribe((data:any)=>{
       this.feesstatus=data;

    }

    )
  }


  viewbtn(){
    let viewbtn:any = document.querySelector("#viewbtn");
    let table_view:any= document.querySelector(".table_view");
    table_view.classList.toggle("show_view");


  }
  update_btn(){

    let update_btn:any = document.querySelector("#update_btn");
    let table_updates:any= document.querySelector(".fees_container");
    table_updates.classList.toggle("show_update");


  }
  feesgrp=this.fb.group({
    Name:[,Validators.required],

    phone:[,Validators.required],

    status:[,Validators.required],
    roomno:[,Validators.required]

  })


  attendance(){
    return this.http.attendanceinfo(this.feesgrp.value).subscribe(data=>{
      alert("sumbit");
      console.log("hooo");
    })


  }

  ngOnInit() {
  }

}
