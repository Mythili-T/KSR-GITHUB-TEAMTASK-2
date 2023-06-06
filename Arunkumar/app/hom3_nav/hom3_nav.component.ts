import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hom3_nav',
  templateUrl: './hom3_nav.component.html',
  styleUrls: ['./hom3_nav.component.css']
})
export class Hom3_navComponent implements OnInit {
usersuccess=false;


  contactModal(){
    const modal:any = document.querySelector("#modal");
    modal.showModal();
 }

 closeModal(){
    const modal:any = document.querySelector("#modal");
    modal.close();
 }

 constructor(private fb:FormBuilder,public authService:AuthService) {
  this.usersuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.authService.userlogin
  }
  logout(){
    this.authService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
  }
 LoginForm=this.fb.group({
   namevalue:[,Validators .required],
   emailvalue:[,Validators .required],
   mobilevalue:[,Validators .required],
   passwordvalue:[,Validators .required],
   confirmpasswordvalue:[,Validators .required],



},
// {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
)
  ngOnInit() {
  }

}
