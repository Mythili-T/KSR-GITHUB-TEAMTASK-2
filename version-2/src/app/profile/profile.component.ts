import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RegisterpageService } from '../registerpage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerno:any=sessionStorage.getItem('Registerno');
  registerForm :FormGroup;
  constructor(private fb: FormBuilder,private register:RegisterpageService) {
   this. registerForm = this.fb.group({
      namevalue: [, Validators.required],
      registernovalue: [, Validators.required],
      emailvalue: [, Validators.required],
      mobilevalue: [, Validators.required],
      passwordvalue: [, Validators.required],
      confirmpasswordvalue: [, Validators.required],
      department:[, Validators.required],
      year:[, Validators.required],


    })
   }

   id:any;
   userdata:any='';
   Name:any;
   Register:any;
   email:any;
   phone:any;
   year:any;
   passwordvalue:any;
   department:any;
   confirmpassword:any;
   ngOnInit() {
     this. register.getUser().subscribe((data)=>{
       this.userdata=data;
       for(var i=0;i<this.userdata.length;i++){
         if(this.registerno==this.userdata[i].registernovalue){
           console.log(this.registerno)
           this.id=i;
         }
       }
       this.Register=this.userdata[this.id].id;
       this.Name=this.userdata[this.id].namevalue;
       this. phone=this.userdata[this.id].mobilevalue;
       this.department=this.userdata[this.id].department;
       this.email=this.userdata[this.id].emailvalue;
       this.year=this.userdata[this.id].year;
       this.Register=this.userdata[this.id].registernovalue;
       this.passwordvalue=this.userdata[this.id].passwordvalue;
       this.confirmpassword=this.userdata[this.id].confirmpasswordvalue
       this.id++;
       this.registerForm.controls['namevalue'].setValue(this.Name);
       this.registerForm.controls['registernovalue'].setValue(this.Register);
       this.registerForm.controls['emailvalue'].setValue(this. email);
        this.registerForm.controls['mobilevalue'].setValue(this.phone);
        this.registerForm.controls['department'].setValue(this.department);
        this.registerForm.controls['year'].setValue(this.year);
        this.registerForm.controls['passwordvalue'].setValue(this.passwordvalue);
        this.registerForm.controls['confirmpasswordvalue'].setValue(this.confirmpassword);
       this.registerForm.markAsPristine();


     })
   }
    updateProfile(data:any){

     alert(this.id);
     if(!this.registerForm.pristine){
       let registerForm={
        namevalue: data.namevalue,
        registernovalue: data.registernovalue,
        mobilevalue: data.mobilevalue,
        department: data.department,
        year: data.year,
        confirmpassword:data.confirmpassword
       }
       this.register.updateProfile(registerForm,this.id).subscribe((Response)=>
       {
         console.log(registerForm);
         alert("updated successfull");
       })
     }
     else{
         alert("data is not modified");
     }
    }
    update(){
     const update1:any=document.querySelector(".body");
     update1.showModal();
     
    }

 }

