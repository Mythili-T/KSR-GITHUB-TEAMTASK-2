import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router,private service:AuthService) { }

  loginform=this.fb.group({
    username:[,[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    password:[,[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$')]]
  })
  error:boolean=false;
  loginForm(username:any){
    console.log(username);
    sessionStorage.setItem('firstname',username);
    this.user();
    this.admin();
    if(this.error){
      alert('ERROR');
    }
  }
 admin(){
  {
    this.http.get<any>('http://localhost:3000/admin').subscribe((users)=>
    {
      const admin= users.find((a:any)=>a.username === this.loginform.value.username && a.password1 === this.loginform.value.password );
      if(admin)
      {
       alert('login successfully');
       this.loginform.reset();
       this.route.navigate(['/admin']);
      }
      else
      {
       this.error=true;
      }
    });
   }
  }
  success=false;
  user()
  {
   this.http.get<any>('http://localhost:3000/users').subscribe((users)=>
   {
     const user= users.find((u:any)=>u.firstname === this.loginform.value.username && u.password === this.loginform.value.password );
     if(user)
     {
      alert('login successfully');
      this.loginform.reset();
      this.success=true;
      // sessionStorage.setItem("firstname",)
      // console.log();
      sessionStorage.setItem("success","true");

      this.service.userlogin=true;
      this.route.navigate(['/home']);
     }
     else
     {
      this.error=true;
     }
   });
  }

  // ngOnInit() {
  // }


}
