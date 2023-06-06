import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterpageService } from '../registerpage.service';
import { confirmPasswordValidate } from '../confrimpassword';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private register:RegisterpageService) { }


  ngOnInit() {
  }
  registerForm = this.fb.group({
    namevalue: [, Validators.required],
    registernovalue: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    passwordvalue: [, Validators.required],
    confirmpasswordvalue: [, Validators.required],
    department:[ Validators.required,],
    year:[ Validators.required,],


  },{
  validator: confirmPasswordValidate('passwordvalue', 'confirmpasswordvalue')
});
submitForm(){
this.register.addUser(this.registerForm.value).subscribe(data=>{
  alert("Registeration Form Submit");
  this.registerForm.reset();
})
}

}
