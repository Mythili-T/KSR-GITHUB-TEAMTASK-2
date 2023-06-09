import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { confirmedValidator } from '../confirmpass.validator';
import { RegisterformService } from '../registerform.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private http:HttpClient,
    private formbuilder: FormBuilder,
    private route: Router,
    private registerform: RegisterformService
  ) {}
  registerForm = this.formbuilder.group(
    {
      uname: [
        ,
        [Validators.required, Validators.pattern, Validators.minLength(3)],
      ],
      age: [, [Validators.required, Validators.min(18), Validators.max(65)]],
      bgroup: ['default', [Validators.required]],
      weight: [, [Validators.required, Validators.min(50)]],
      gender: ['default', [Validators.required]],
      email: [, [Validators.required, Validators.pattern]],
      phno: [, [Validators.required]],
      city: ['', [Validators.required]],
      pass: [, [Validators.required]],
      cpass: [, [Validators.required]],
    },
    { validator: confirmedValidator('pass', 'cpass') }
  );

  ngOnInit() {}

  submitForm() {
    if (!this.registerForm.valid) {
      alert('Please fill all the Details');
    } else if (this.registerForm.valid) {
      this.registerform.addUserInformation(this.registerForm.value).subscribe(
        (data) => {
        },
        (err) => {
          alert('Something went wrong');
        }
      );
      this.http.get<any>("http://localhost:3000/registeredusers").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.registerForm.value.email 
      });
      if(user){
        this.updateOf(user)
      }})
    }
  }
  updateOf(user:any) {
    var setstatus={
      setStatus:"Available"
    }
    this.http.patch<any>(' http://localhost:3000/registeredusers/'+ user.id,setstatus).subscribe(()=>{
      alert('Registerd Sucessfully Press ok to Login');
          this.registerForm.reset();
          this.route.navigate(['/', 'login']);
    })
  }
}



