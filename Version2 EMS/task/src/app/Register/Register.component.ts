import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup,PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Open_SerService } from '../Openings/Open_Ser.service';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent {


  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router, private service:RegisterService, private openservice:Open_SerService) { }
  regForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    mail:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
upload:[,[Validators.required]]
  })
  status:boolean=false;
  recRole:any=this.openservice.applyRole;

  register()
  {
    if(this.regForm.valid)
    {
      this.status=true;
      alert("Resume Sumitted Successfully");
      this.db();
      this.regForm.reset();

    }

  }
  final:any='';

db(){
  if(this.recRole=="Java Developer"){
    this.final="JavaDeveloper";

  }
  else if(this.recRole=="UI Developer"){
    this.final="UIDeveloper";
  }
  else if(this.recRole=="Java Full Stack Developer"){
    this.final="JavaFullStackDeveloper";
  }
  else if(this.recRole=="Automation Tester"){
    this.final="AutomationTester";
  }
  else if(this.recRole=="Technical Lead"){
    this.final="TechnicalLead";
  }

  var body={
    username:this.regForm.value.username,
    mobile:this.regForm.value.mobile,
    mail:this.regForm.value.mail,
    role:this.recRole
  }
  // this.service.postResume(body).subscribe(data=>{
  //   alert("Successfully Stored in a DB");
  // })
this.http.post<any>("http://localhost:3000/"+this.final,body).subscribe(data=>{


})
}
  ngOnInit() {
  }

}
