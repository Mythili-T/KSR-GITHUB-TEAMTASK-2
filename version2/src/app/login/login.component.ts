import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent{

  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router) { }
  loginForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)],Validators.pattern("^[A-Z][a-z]*[\s{1}]*[A-Za-z]$")],
    password:[,[Validators.required,Validators.minLength(6)]]

  })
submit()
{
  alert("OK");
  this.http.get<any>("http://localhost:3000/userProfile").subscribe(res=>{
      const users=res.find((a:any)=>{
        return a.email===this.loginForm.value.username && a.password===this.loginForm.value.password
      });
      if(users){
        alert("Login Successfully");
        // this.service.loginid=users;
        sessionStorage.setItem('loginid',JSON.stringify(users));
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else{
        alert("User Not Found");
      }
    })
  }
}
