import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidate } from './confirmPasswordValidate';
import { RegserviceServiceService } from './RegserviceService.service';


@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.component.html',
  styleUrls: ['./login-credentials.component.css']
})
export class LoginCredentialsComponent implements OnInit {


  constructor(private fb:FormBuilder,private user:RegserviceServiceService) { }
  regform=this.fb.group({
    namevalue:[,Validators .required],
    emailvalue:[,Validators .required],
    mobilevalue:[,Validators .required],
    passwordvalue:[,Validators .required],
    confirmpasswordvalue:[,Validators .required],

  }
  ,
  {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  )
  mail:any='';
  name:any='';
  mobil:any='';
  password:any='';
  confirmpassword:any='';
  submitform(){

    var body={
      mail1:this.mail,
      name1:this.name,
      mobil1:this.mobil,
      password1:this.password,
      confirmpassword1:this.confirmpassword,}


this.user.addReginfo(body).subscribe(data=>{
alert("form submit");
})
  }

  ngOnInit() {
  }
}
