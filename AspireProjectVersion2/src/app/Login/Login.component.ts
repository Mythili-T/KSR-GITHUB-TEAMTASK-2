import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';
import { HomeService } from '../Home/Home.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

studio:any;
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private route:Router,
    public loginService:LoginService,
    private service:HomeService) {}

LoginForms=this.fb.group({
  email:[,[Validators.required,Validators.pattern("^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$")]],
  password:[,[Validators.required,Validators.pattern("^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$")]]
})
error:boolean=false;
loginForm(){
  this.user();
  this.admin();
  if(this.error){
    alert('Error');
  }
}
user(){
  this.http.get<any>('http://localhost:3000/users').subscribe((users)=>{
    const user=users.find((u:any)=>u.email===this.LoginForms.value.email && u.create=== this.LoginForms.value.password);
    if(user){
      alert('login successfully');
      this.service.loginUser=user;
      sessionStorage.setItem('loginUser', JSON.stringify(user));
      this.loginService.onLogin();
      this.LoginForms.reset();
      this.route.navigate(['/home']);
    }
    else{
      this.error=true;
    }
  })
}
admin(){
  this.http.get<any>('http://localhost:3000/admin').subscribe((users)=>{

  const user=users.find((u:any)=>u.email===this.LoginForms.value.email && u.create=== this.LoginForms.value.password);
    if(user){
      alert('login successfully');
      this.LoginForms.reset();
      this.loginService.onLogin();
      this.route.navigate(['/Admin']);
    }
    else{
      this.error=true;
    }
  })
}

// login logout



  ngOnInit() {
  }


onlogout(){
  this.loggedin=false;
  this.route.navigate(['/home']);

}
loggedin=false;


}
