import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  emailId:any=sessionStorage.getItem('emailDetails');
  update:FormGroup

  constructor(private service:HttpDbService,private form:FormBuilder) {
   this.update=this.form.group({
    name:[,Validators.required],
    regNo:[,Validators.required],
    age:[,Validators.required],
    email:[,Validators.required],
    phoneno:[,Validators.required],
    father:[,Validators.required],
    mother:[,Validators.required],
    address:[,Validators.required],
    college:[,Validators.required],
    Adharnumber:[,Validators.required],
    room:[,Validators.required],


   })
    // this.service.getregno().subscribe((data: any)=>{
    //   this.userdata=data;
    // })
  }

  id:any;
  userdata:any='';
  Name:any;
  Register:any;
  Age:any;
  email:any;
  phone:any;
  Father:any;
  Mother:any;
  Address:any;
  college:any;
  Adharnumber:any;
  Room:any;
  ngOnInit() {
    this.service.studentProfile().subscribe((data)=>{
      this.userdata=data;
      for(var i=0;i<this.userdata.length;i++){
        if(this.emailId==this.userdata[i].Email){
          console.log(this.emailId)
          this.id=i;
        }
      }
      this.Register=this.userdata[this.id].id;
      this.Name=this.userdata[this.id].name;
      this. phone=this.userdata[this.id].mobile;
      this.Age=this.userdata[this.id].age;
      this.Father=this.userdata[this.id].Fathername;
      this. Mother=this.userdata[this.id].mothername;
      this.email=this.userdata[this.id].Email;
      this.Address=this.userdata[this.id].permentaddress;
      this.college=this.userdata[this.id].collegename;
      this. Adharnumber=this.userdata[this.id].Adharnumber;
      this.Room=this.userdata[this.id].roomnumber;
      this.Register=this.userdata[this.id].regNo;
      this.id++;
      this.update.controls['name'].setValue(this.Name);
      this.update.controls['regNo'].setValue(this.Register);
      this.update.controls['age'].setValue(this.Age);
      this.update.controls['email'].setValue(this. email);
       this.update.controls['phoneno'].setValue(this.phone);
       this.update.controls['father'].setValue(this.Father);
       this.update.controls['mother'].setValue(this.Age);
       this.update.controls['address'].setValue(this.Address);
       this.update.controls['college'].setValue(this.college);
       this.update.controls['Adharnumber'].setValue(this.Adharnumber);
       this.update.controls['room'].setValue(this.Room);

      this.update.markAsPristine();


    })
  }
   updateProfile(data:any){

    alert(this.id);
    if(!this.update.pristine){
      let updated={
       name: data.name,
        regNo: data.regNo,
        age: data.age,
        email: data.email,
        phoneno: data.mother,
        father:data.Fathername,
        mother:data.mothername,
        address:data.permentaddress,
        college:  data.collegename,
        Adharnumber:data.Adharnumber,
        room: data.age
      }
      this.service.updateProfile(updated,this.id).subscribe((Response)=>
      {
        console.log(updated);
        alert("updated successfull");
      })
    }
    else{
        alert("data is not modified");
    }
   }

   menu_show(){
    const modal:any = document.querySelector('#modal');
    const openModal:any = document.querySelector('#menu_show');
    const closeModal:any = document.querySelector('#close_show');
    modal.showModal();

  }
  close_show(){   const modal:any = document.querySelector('#modal');
  const openModal:any = document.querySelector('#menu_show');
  const closeModal:any = document.querySelector('#close_show');
  modal.close();

  }
}
