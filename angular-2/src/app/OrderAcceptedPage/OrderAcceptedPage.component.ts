import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-OrderAcceptedPage',
  templateUrl: './OrderAcceptedPage.component.html',
  styleUrls: ['./OrderAcceptedPage.component.css']
})
export class OrderAcceptedPageComponent implements OnInit {

  register: any;
retUrl:any;
  acceptdetails: any;
  order:any;
  constructor(private fb:FormBuilder, private service:ServiceService,private route:Router,private http:HttpClient,private detailService:DetailServiceService) { }
   OrdersForm=this.fb.group({

    fname:[,[Validators.required]],
    lname:[,[Validators.required]],
    phonenumber:[,[Validators.required]],
    email:[,[Validators.required]],
    models:[,[Validators.required]],
    amount:[,[Validators.required]]
  })
  generate:any='';
  ngOnInit() {
    this.generate=this.detailService.billGenerate

  }
  formRegister() {
      this.service.postOrderDetails(this.OrdersForm.value).subscribe((data: any)=>{
      alert('Form Submitted');
      this.OrdersForm.reset();

    })

    }
    getId(values:any){
      this.http.get<any>("http://localhost:3000/OrderAcceptedDetails/"+values.id).subscribe((data)=>{
        this.acceptdetails=data;
            });

    }

 orders(){
  var body={
    "fname":this.detailService.billGenerate.fname,
     "lname":this.detailService.billGenerate.lname,
     "mobile":this.detailService.billGenerate.mobile,
     "email":this.detailService.billGenerate.email,
     "amount":this.OrdersForm.value.amount
  }


  this.http.post<any>(" http://localhost:3000/GenanerateBills",body).subscribe(()=>{

    alert("Bill Generate successfull");
    let close=document.getElementById("cancel");
    close?.click();

  });
  
 }


//  close(values:any){
//   this.http.get<any>("http://localhost:3000/OrderDetails").subscribe(()=>{
//   alert("")
//   });
// }
}
