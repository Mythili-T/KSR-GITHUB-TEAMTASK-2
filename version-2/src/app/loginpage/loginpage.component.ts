import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpageService } from '../registerpage.service';
import { HomepageService } from '../homepage.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  registerno:any="";
  password:any="";
  retUrl:any="";
  adminreg:any;
  adminpassword:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private login:HomepageService,private route:Router,
    private logservice:HomepageService,private router:ActivatedRoute,private authenticationService:HomepageService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.logservice. userloggedin(this.registerno,this.password);
    if(this.retUrl!=null)
    this.route.navigate([this.retUrl]);
  }

  loginForm=this.fb.group({
    registernovalue:[,Validators .required],
    passwordvalue:[,Validators .required],

  })
submitLoginForm(reg:any){
  console.log(reg);
  sessionStorage.setItem('Registerno',reg)
  this.http.get<any>('http://localhost:3000/registeruser').subscribe(res=>{
    const user=res.find((a:any)=>a.registernovalue===this.loginForm.value.registernovalue && a.passwordvalue===this.loginForm.value.passwordvalue);
    if(user){
      alert("Login successfully");
      sessionStorage.setItem('loginUser',JSON.stringify(user));
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/Homepage'])
    }
    // else{
    //   alert("check your data");
    // }

  });

  this.http.get<any>('http://localhost:3000/Admin').subscribe(res=>{
    const user=res.find((a:any)=>a.registernovalue===this.loginForm.value.registernovalue && a.passwordvalue===this.loginForm.value.passwordvalue);
    if(user){
      alert("Login successfully");
      sessionStorage.setItem('loginUser',JSON.stringify(user));
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/Admin-Homepage'])
    }
  });


}

}
