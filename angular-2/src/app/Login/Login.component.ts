import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmedValidator } from '../confirm.validator.ts';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`input.ng-invalid{border :5px solid red;}

  input.ng-valid{border:5px solid green;}`
]
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  username:new FormControl(" "),
  password:new FormControl(),
  cpassword:new FormControl()
});
constructor(private fb:FormBuilder){


}
loginForm1=this.fb.group({
  username:["enter the username",[Validators.required,Validators.minLength(3)]],
  password:["",[Validators.required]],
  cpassword:["",[Validators.required]]
},{validator:confirmedValidator('password','cpassword')})
  ngOnInit(): void {

      }

        }
