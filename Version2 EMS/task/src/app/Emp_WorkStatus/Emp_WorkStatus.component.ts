import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-Emp_WorkStatus',
  templateUrl: './Emp_WorkStatus.component.html',
  styleUrls: ['./Emp_WorkStatus.component.css']
})
export class Emp_WorkStatusComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  workForm=this.fb.group({
    status:[,[Validators.required]],
    text:[,[Validators.required]],
    totalTime:[,[Validators.required]]
  })

  send()
  {
    if(this.workForm.valid)
    {
      
      alert("Work Status Submitted successfully");

    }
  }
  // sub(){
  //   if(this.ForgotForm.valid)
  //   {
  //     this.status=true;
  //     alert("Successfully Submitted");

  //   }
  // }
  ngOnInit() {
  }

}
