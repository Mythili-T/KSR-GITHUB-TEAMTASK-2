import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { RegisterValidateService } from './registerValidate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:`

})
export class AppComponent {
  email:any=sessionStorage.getItem('email');
  title = 'bikeA';
  usersuccess=false;
  constructor(public authService: AuthService, private service: RegisterValidateService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess" ))||this.authService.userlogin
  }
  registerdetail:any='';
  id:any;
  firstname:any;
  logout(){
    this.authService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
  }
  data:any;
  ngOnInit(){
     this.service.getData().subscribe((data)=>{
      this.registerdetail=data;

     for(var i=0;i<this.registerdetail.length;i++){
      if(this.email==this.registerdetail[i].email){
         console.log(this.email);
         this.id=i;
         console.log(this.id);
      }
     }
     this.firstname=this.registerdetail[this.id].firstname;
    })
  }
  }

