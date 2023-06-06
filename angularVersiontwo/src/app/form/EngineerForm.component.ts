import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-EngineerForm',
  templateUrl: './EngineerForm.component.html',
  styleUrls: ['./EngineerForm.component.css']
})
export class EngineerFormComponent implements OnInit {
 constructor(

  private fb: FormBuilder,
  private Reg: ValidateService,
  private route: Router
) {}
personalForms = this.fb.group(
  {
    firstname:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastname:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    dob:[, [Validators.required,]],
    age:[, [Validators.required,]],
    fathername:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    mothername:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    occupation:[, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    ctc:[, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
    sex:[, [Validators.required,]],
    bloodgrp:[, [Validators.required,]],
    Phoneno:[, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
    address:[, [Validators.required,]],

}
);
personalSubmit() {
  this.Reg.addPersonalInfo(this.personalForms.value).subscribe((data) => {
    alert('Form Submitted');
    // this.route.navigate(['/login']);
  });
}


  ngOnInit() {
  }
  personalInfo(){
   const personal:any= document.querySelector(".personalDetails");
   personal.showModal();
  }

  studyInfo(){
  const study:any= document.querySelector(".studyForms");
  study.showModal();
  }
accountInfo(){
 const account:any= document.querySelector(".accountForms");
 account.showModal();
}
backPage()
{
   this.route.navigate(['/service']);
}
}
