import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidate } from './confirmPasswordValidate';

import { RegcredService } from './regcred.service';

@Component({
  selector: 'app-admin-cred',
  templateUrl: './admin-cred.component.html',
  styleUrls: ['./admin-cred.component.css']
})
export class AdminCredComponent implements OnInit {




  constructor(private fb:FormBuilder,private regcred:RegcredService) { }
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
regSubmit(){


  this.regcred.addReg(this.regform.value).subscribe(data =>{
    alert("form submitted");
  })

}
  ngOnInit() {
  }


}
