import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordMatch } from 'src/Validators/passMatch';

@Component({
  selector: 'app-Emp_cPass',
  templateUrl: './Emp_cPass.component.html',
  styleUrls: ['./Emp_cPass.component.css']
})
export class Emp_cPassComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  passForm=this.fb.group({
    currentPassword:[,[Validators.required,Validators.minLength(6)]],
    changePassword:[,[Validators.required,Validators.minLength(6)]],
    confirmPassword:[,[Validators.required]]

  },  [passwordMatch("changePassword" ,"confirmPassword")]
  )
  status:boolean=false;
  ngOnInit() {
  }
change(){
  if(this.passForm.valid)
  {
    this.status=true;
    alert("Password Changed");
}
}
}
