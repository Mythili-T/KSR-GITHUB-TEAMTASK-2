import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  attenance: any;
  constructor( private service:HttpDbService,private fb:FormBuilder)  {
    this.service.getstudent_Attenance().subscribe((data: any)=>{
      this.attenance=data;
    }  )
  }



  ngOnInit() {
  }

}
