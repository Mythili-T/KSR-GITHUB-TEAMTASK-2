import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserModel } from './book-dash board.model';
import { Api2Service } from '../api2.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {
formValue!:FormGroup
UserData!:any;
showAdd!:boolean;
showUpdate!:boolean;
UserModelObj:UserModel=new UserModel()
  constructor(private formbuilder:FormBuilder,private api2:Api2Service) { }

  ngOnInit() :void{
    this.formValue=this.formbuilder.group({
      namevalue:[''],
      emailvalue:[''],
      mobilevalue:[''],
      passwordvalue:[''],
      confirmpasswordvalue:['']

    })
    this.getAllUser()
  }
  clickAddUser(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postUserDetails(){
    this.UserModelObj.namevalue=this.formValue.value.namevalue;
    this.UserModelObj.emailvalue=this.formValue.value.emailvalue;
    this.UserModelObj.mobilevalue=this.formValue.value.mobilevalue;
    this.UserModelObj.passwordvalue=this.formValue.value.passwordvalue;
    this.UserModelObj.confirmpasswordvalue=this.formValue.value.confirmpasswordvalue;

this.api2.postUser(this.UserModelObj)
.subscribe(res=>{
  console.log(res);
  alert("User Added Successfully");
  this.formValue.reset();
  let ref = document.getElementById('cancel')
  ref?.click();
  this.getAllUser();

},ere=>{
  alert("Something went wrong")
})
  }
  getAllUser(){
    this.api2.getUser()
    .subscribe(res=>{
      this.UserData=res;
    })
  }
  deleteUser(row : any){
    this.api2.deleteUser(row.id)
    .subscribe(res=>{
      alert("User Deleted")
      this.getAllUser();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
      this.showUpdate=true;
    this.UserModelObj.id=row.id;
    this.formValue.controls['namevalue'].setValue(row.namevalue);
    this.formValue.controls['emailvalue'].setValue(row.emailvalue);
    this.formValue.controls['mobilevalue'].setValue(row.mobilevalue);
    this.formValue.controls['passwordvalue'].setValue(row.passwordvalue);
    this.formValue.controls['confirmpasswordvalue'].setValue(row.confirmpasswordvalue);

  }
  updateUserDetails(){
    alert("Updated Successfully");
    this.UserModelObj.namevalue=this.formValue.value.namevalue;
    this.UserModelObj.emailvalue=this.formValue.value.emailvalue;
    this.UserModelObj.mobilevalue=this.formValue.value.mobilevalue;
    this.UserModelObj.passwordvalue=this.formValue.value.passwordvalue;
    this.UserModelObj.confirmpasswordvalue=this.formValue.value.confirmpasswordvalue;

    this.api2.updateUser(this.UserModelObj,this.UserModelObj.id)
    .subscribe(res=>{

      this.formValue.reset();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.getAllUser();
    })

  }

}
function clickAddUser() {
  throw new Error('Function not implemented.');
}


