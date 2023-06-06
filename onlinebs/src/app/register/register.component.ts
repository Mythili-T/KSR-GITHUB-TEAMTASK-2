import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidate } from '../confirmPasswordValidate.validator';
import { FormsubmitService } from '../formsubmit.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  namevalue: any;
  emailvalue: any;
  passwordvalue: any;
  confirmpasswordvalue: any;
  body: any;

  constructor(private fb: FormBuilder, private users: FormsubmitService) {}
  regform = this.fb.group(
    {
      namevalue: [, Validators.required],
      emailvalue: [, Validators.required],
      mobilevalue: [, Validators.required],
      passwordvalue: [, Validators.required],
      confirmpasswordvalue: [, Validators.required],
    },
    {
      validator: confirmPasswordValidate(
        'passwordvalue',
        'confirmpasswordvalue'
      ),
    }
  );

  ngOnInit() {}
  submitForm() {
    var body = {
      uname: this.namevalue,
      mobile: this.emailvalue,
      email: this.emailvalue,
      password: this.passwordvalue,
      confirmpassword: this.confirmpasswordvalue,
    };

    this.users.addUserInformation(this.regform.value).subscribe((data: any) => {
      alert('Form submitted');
    });
  }
}
