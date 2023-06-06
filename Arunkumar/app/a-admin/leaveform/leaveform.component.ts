import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegcredService } from 'src/app/admin-cred/regcred.service';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent implements OnInit {

  name1:any;


  mail1: any;
  mobil1: any;

  password1: any;
  cp1: any;

  constructor(private fb:FormBuilder,private regcred:RegcredService) { }
  feesform=this.fb.group({
    namevalue:[,Validators .required],
    emailvalue:[,Validators .required],
    mobilevalue:[,Validators .required],
    passwordvalue:[,Validators .required],
    confirmpasswordvalue:[,Validators .required],

  }
  // ,
  // {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  )
  feesSubmit(){
  var regdb={ name:this.name1,
        emailid:this.mail1,
        mobileno:this.mobil1,
        password:this.password1,
        confirmpassword:this.cp1,

  }

  this.regcred.addReg(regdb).subscribe(data =>{
    alert("form submitted");
  })

}
// feesSubmit(){

// }
  ngOnInit() {
  }
}
