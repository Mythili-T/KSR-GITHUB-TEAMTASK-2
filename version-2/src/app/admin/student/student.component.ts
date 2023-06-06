import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  getUser:any="";

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
  this.getUserList();
}
getUserList(){
  this.adminservice.getUserList().subscribe((response)=>{
    this.getUser=response;
  })
}

}
