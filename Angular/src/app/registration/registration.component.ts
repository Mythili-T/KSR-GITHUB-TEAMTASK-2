import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidateService } from '../registerValidate.service';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  gologin() {
    this.route.navigate(['/login']);
  }

  RegisterForm = new FormGroup({
    firstname: new FormControl(),
    Phoneno: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirm: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private Reg: RegisterValidateService,
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
    },
    { validator: ConfirmedValidator('password', 'confirm') }
  );

  submitForm() {
    this.Reg.addUserInfo(this.RegisterForms.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}


