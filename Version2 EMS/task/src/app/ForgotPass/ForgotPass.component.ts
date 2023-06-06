import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-ForgotPass',
  templateUrl: './ForgotPass.component.html',
  styleUrls: ['./ForgotPass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  ForgotForm=this.fb.group({
    mailID:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],

  })
  status:boolean=false;
  register(){
    if(this.ForgotForm.valid)
    {
      this.status=true;
      alert("Successfully Submitted");

    }
  }
  ngOnInit() {
  }

}
