import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ModellingService } from '../modelling.service';

@Component({
  selector: 'app-Loginnew',
  templateUrl: './Loginnew.component.html',
  styleUrls: ['./Loginnew.component.css']
})
export class LoginnewComponent {
  // [x: string]: any;
  // usersuccess=false;
  constructor(private formBuilder:FormBuilder,private https:HttpClient,private route:Router, private service:LoginService,private modellingservice:ModellingService) {
   }

 loginForms=this.formBuilder.group({
  username:[,[Validators.required,Validators.pattern('^([a-zA-Z0-9.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$')]],
  password:[,[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]+[@/!/#/$/%/&][0-9]{2,4}$')]]
 })

 errors:any=false;
login(){
this.user();
this.admin();
if(this.errors){
  alert("INVALID")
   this.refresh();
}
}
user(){
  this.https.get<any>("http://localhost:3000/Register").subscribe(res=>{
      const users=res.find((a:any)=>{
        return a.email===this.loginForms.value.username && a.password===this.loginForms.value.password
      });

      if(users){
        alert("Login Successfully");
        sessionStorage.setItem('user',JSON.stringify(users));
        sessionStorage.setItem('usersuccess','true');
        this.modellingservice.userlogin=true;
        this.route.navigate(['Home'])
      }
      else{
        this.errors=true
      }


    })
}
refresh(): void {
  window.location.reload();
}
admin(){
  this.https.get<any>("http://localhost:3000/adminDetails").subscribe(res=>{
    const admin=res.find((a:any)=>{
      return a.aemail===this.loginForms.value.username && a.apassword===this.loginForms.value.password

    });

    if(admin){
      alert("Login Successfully");
      this.route.navigate(['Admin'])

    }

  })
}
}
function refresh() {
  throw new Error('Function not implemented.');
}

