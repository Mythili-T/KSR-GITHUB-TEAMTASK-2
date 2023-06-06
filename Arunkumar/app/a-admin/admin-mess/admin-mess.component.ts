import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SideBarComponent } from 'src/app/SideBar/SideBar.component';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-admin-mess',
  templateUrl: './admin-mess.component.html',
  styleUrls: ['./admin-mess.component.css']
})
export class AdminMessComponent implements OnInit {

  feesstatus: any;

  constructor(private fb:FormBuilder,private http:HttpDbService) {
    this.http.getfeesupdate().subscribe((data:any)=>{
       this.feesstatus=data;
       console.log(this.feesstatus);
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
    email:[,Validators.required],
    phone:[,Validators.required],
    register:[,Validators.required],
    feesStatus:[,Validators.required],
    roomno:[,Validators.required]

  })


  feesform(){
    return this.http. messinfo(this.feesgrp.value).subscribe(data=>{
      alert("Mess added");
    })


  }



  ngOnInit() {
  }
}
