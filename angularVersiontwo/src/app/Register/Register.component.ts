import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ValidateService } from '../validate.service';
import { ConfirmedValidator } from './confirm.validators';
// import { NewRegisterService } from './New-Register.service';
// import { validateService } from './register.service';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent {
  gologin() {
    this.route.navigate(['/login']);
  }

  RegisterForm = new FormGroup({
    firstname: new FormControl(),
    Phoneno: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirm: new FormControl(),
    address:new FormControl(),
    image:new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private Reg: ValidateService,
    private route: Router
  ) {}

  RegisterForms = this.fb.group(
    {
      firstname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Phoneno: [, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
      // mobilenumber:[,[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      email: [,[Validators.required, Validators.pattern('^([a-zA-Z0-9.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$')]],
      password: [, [Validators.required,Validators.pattern('^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$')]],
      confirm: [, [Validators.required,]],
      // policy:[,[Validators.required]],
      address: [,[Validators.required]],

    },
    { validator: ConfirmedValidator('password', 'confirm') }
  );

  submitForm() {
    this.Reg.addUserInfo(this.RegisterForms.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['/login']);
    });
  }
}
