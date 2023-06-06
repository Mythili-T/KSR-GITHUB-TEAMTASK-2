import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup,Validators} from '@angular/forms';
import { ConfirmedValidator } from './confirm.validators';
import { NewRegisterService } from './New-Register.service';
import { UsernameValidator } from './Username.validators';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
RegisterForm=new FormGroup({
  firstname:new FormControl(),
  lastname:new FormControl(),
  mobilenumber:new FormControl(),
  email:new FormControl(),
  create:new FormControl(),
  confirm:new FormControl(),
  policy:new FormControl(),

});
// FirstName:any="";
// LastName:any="";
// EmailId:any="";
// MobileNo:any="";
// CreatePass:any="";
// ConfirmPass:any="";
// Policy:any="";
  constructor(private fb:FormBuilder,private Reg:NewRegisterService) { }

  RegisterForms=this.fb.group({
    firstname:[,[Validators.required,Validators.pattern("^[A-Za-z ][A-Za-z\\s]{0,20}$"),UsernameValidator]],
    lastname:[,[Validators.required,Validators.pattern("^[A-Za-z ][A-Za-z\\s]{0,20}$")]],
    mobilenumber:[,[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    email:[,[Validators.required,Validators.pattern("^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$")]],
    create:[,[Validators.required,Validators.pattern("^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$")]],
    confirm:[,[Validators.required]],
    policy:[,[Validators.required]],
  },{validator:ConfirmedValidator('create','confirm')})

  ngOnInit() {
  }
submitForm(){

   this.Reg.addUserInfo(this.RegisterForms.value).subscribe(data=>{
    alert("Form Submitted");
    this.RegisterForms.reset();

   })
}
}
