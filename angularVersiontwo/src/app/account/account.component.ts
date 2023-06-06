import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    update:FormGroup
    Account:FormGroup
   name:any=sessionStorage.getItem('firstname');
  constructor(private service:ValidateService,private form:FormBuilder,private http:HttpClient,private route:Router) {
    this.update=this.form.group({
      firstname:[,Validators.required],
      phoneno:[,Validators.required],
      email:[,Validators.required],
      password:[,Validators.required],
      confirm:[,Validators.required],
    address:[,Validators.required],
    })
    this.Account=this.form.group({
      // name:[,Validators.required],
      Pname:[,Validators.required],
      // phone:[,Validators.required],
      // email:[,Validators.required],
      pan:[,Validators.required],
      aadhar:[,Validators.required]
    })
  }
  accValue:any=""
  accountSubmit() {
    this.service.addAccountInfo(this.Account.value).subscribe((data) => {
      this.accValue=data
      alert('Form Submitted');
      this.generate(this.accValue)

      // this.route.navigate(['myaccount']);
    });
    // this.status=false
  }

  generate(value:any){
    var body={
      bankname: "ELMS Bank",
      branch: "Salem",
      accountnumber: "636015000"+value.id,
      ifsccode: "ELMS0000ES1",
      micrcode: "636006001",
      email: this.update.value.email,
      status:"false",
      id:value.id
    }
    this.http.post<any>("http://localhost:3000/bankaccount",body).subscribe(postVal=>{
      alert("Posted")
    })
  }
  registerDetails:any='';
  idvalue:any;
  firstname:any;
  email:any;
  phoneno:any;
  password:any;
  confirm:any;
  address:any;

  status:any="true"
  ngOnInit() {
    this.service.getData().subscribe((data)=>{
     this.registerDetails=data;

     for(var i=0;i<this.registerDetails.length;i++){
      if(this.name==this.registerDetails[i].firstname){
         console.log(this.name);
         this.idvalue=i;
         
         console.log(this.idvalue);
      }
     }
     this.firstname=this.registerDetails[this.idvalue].firstname;
     this.email=this.registerDetails[this.idvalue].email;
     this.phoneno=this.registerDetails[this.idvalue].Phoneno;
     this.password=this.registerDetails[this.idvalue].password;
     this.address=this.registerDetails[this.idvalue].address;
     this.confirm=this.registerDetails[this.idvalue].confirm;
     this.idvalue++;
     this.update.controls['firstname'].setValue(this.firstname);
     this.update.controls['email'].setValue(this.email);
     this.update.controls['phoneno'].setValue(this.phoneno);
     this.update.controls['password'].setValue(this.password);
     this.update.controls['confirm'].setValue(this.confirm);
     this.update.controls['address'].setValue(this.address);
     this.update.markAsPristine();
     console.log(this.idvalue);

     this.http.get<any>("http://localhost:3000/bankaccount/"+this.idvalue).subscribe(x=>{
      this.status=x.status;

    })
    }
  )
    this.sample();
    // alert(this.idvalue)

  }

val:any=""
accEmail:any=""
  sample(){
    this.http.get<any>("http://localhost:3000/account").subscribe(data=>{
      const aEmail=data.find((b:any)=>{
        return b.id===this.idvalue;
      });
      if(aEmail){
        this.x(aEmail);
      }
    });
    // this.ngOnInit();

  }
  x(email:any){
    this.http.get<any>("http://localhost:3000/users").subscribe((dat)=>{
      const getUser=dat.find((a:any)=>{
        return a.id===email.id;
      });
      if(getUser){
        this.http.get<any>("http://localhost:3000/bankaccount/"+getUser.id).subscribe(data=>{
          this.val=data
        })
      }
    })
  }
  updateProfile(data:any){
   if(!this.update.pristine){
    let updatedData={
      firstname: data.firstname,
      Phoneno: data.phoneno ,
      email:  data.email,
      password: data.password,
      confirm:data.confirm,
      address: data.address,

    }
    this.service.updateuserInfo(updatedData,this.idvalue).subscribe((Response)=>
    {
      alert("updated successfull");
      // this.http.get(`http://localhost:3000/users/${this.idvalue}`).subscribe((Response:any)=>{
      //   console.log(Response.firstname);
      //   this.update.controls['firstname'].setValue(Response.firstname);
      //   this.update.controls['email'].setValue(Response.email);
      //   this.update.controls['phoneno'].setValue(Response.phoneno);
      //   this.update.controls['password'].setValue(Response.password);
      //   // this.update.controls['confirm'].setValue(Response.confirm);
      //   this.update.controls['address'].setValue(Response.address);
      // }
      // )
      this.route.navigate(['/login']);
    })

   }
   else{
    alert("Data is not modified");
   }

  }
  profileUpdate(){
    const profile:any= document.querySelector(".update");
    profile.showModal();
  }
  closeProfile(){
    const close:any =document.querySelector(".update");
    close.close();
  }
  bankaccount(){
    const acc:any= document.querySelector(".account");
    acc.showModal();
  }
  closeAccount(){
    const close:any =document.querySelector(".account");
    close.close();
  }
}
// "firstname": "mani",
//       "Phoneno": "8610209535",
//       "email": "crazysanty007@gmail.com",
//       "password": "Mani@123",
//       "confirm": "Mani@123",
//       "address": "ksr college of engineering",
//       "id": 9
