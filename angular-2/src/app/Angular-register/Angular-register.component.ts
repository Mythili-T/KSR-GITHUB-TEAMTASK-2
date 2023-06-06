import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{confirmedValidator} from '../confirm.validator.ts'
import { RegisterValidateService } from '../RegisterValidate.service';

@Component({
  selector: 'app-Angular-register',
  templateUrl: './Angular-register.component.html',
  styleUrls: ['./Angular-register.component.css']
})
export class AngularRegisterComponent implements OnInit {

  //   Registerform = new FormGroup({
  //   username: new FormControl(" "),
  //   email: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  // });
  constructor( private fb:FormBuilder,private register:RegisterValidateService,private route:Router) { }

  Registerforms = this.fb.group(
    {
      username: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [,[Validators.required, Validators.pattern('^([a-zA-Z0-9.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$')]],
      password: [, [Validators.required,Validators.pattern('^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$')]],
      confirmPassword: [, [Validators.required,]],
    },
    { validator:confirmedValidator('password','confirmPassword') }
  );
  formRegister() {
  if(!this.Registerforms.valid){
    alert('please enter all fields');
  }
  else if(this.Registerforms.valid){
    this.register.addRegister(this.Registerforms.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['loginnew']);
    });
  }
  }
  ngOnInit() {
  }
  
}



