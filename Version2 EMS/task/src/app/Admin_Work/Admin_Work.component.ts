import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkFormComponent } from '../work-form/work-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Admin_Work',
  templateUrl: './Admin_Work.component.html',
  styleUrls: ['./Admin_Work.component.css']
})
export class Admin_WorkComponent implements OnInit {

  constructor(private dia:MatDialog,private http:HttpClient) { }
  getWork:any="";
openForm(){
  this.dia.open(WorkFormComponent);
}
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/WorkForm").subscribe(value=>{
      this.getWork=value;
  });
  }
}
