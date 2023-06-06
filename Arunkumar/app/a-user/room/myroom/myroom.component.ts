import { Component, OnInit } from '@angular/core';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-myroom',
  templateUrl: './myroom.component.html',
  styleUrls: ['./myroom.component.css']
})
export class MyroomComponent implements OnInit {
  emailId:any=sessionStorage.getItem('emailDetails');
  constructor(private service:HttpDbService) { }
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
  })

}}
