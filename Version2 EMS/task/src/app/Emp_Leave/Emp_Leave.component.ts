import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Emp_Leave',
  templateUrl: './Emp_Leave.component.html',
  styleUrls: ['./Emp_Leave.component.css']
})
export class Emp_LeaveComponent {
  constructor(private fb:FormBuilder, private http:HttpClient){}
    leaveForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    tlname:[,[Validators.required,Validators.minLength(3)]],
    deptname:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    leaveDate:[,[Validators.required]],
    returnDate:[,[Validators.required]],
    reason:[,[Validators.required]]
})
status:boolean=false;

others(){
this.status=true;
}
sub(){
  if(this.leaveForm.valid)
  {
    alert("Resume Sumitted Successfully");
    this.db();
    this.leaveForm.reset();

  }
}
db(){
  var body={
    username:this.leaveForm.value.username,
    tlname:this.leaveForm.value.tlname,
    deptname:this.leaveForm.value.deptname,
    mobile:this.leaveForm.value.mobile,
    leaveDate:this.leaveForm.value.leaveDate,
    returnDate:this.leaveForm.value.returnDate,
    reason:this.leaveForm.value.reason
  }
    this.http.post<any>("http://localhost:3000/leaveForm",body).subscribe(data=>{


})

  }
}

