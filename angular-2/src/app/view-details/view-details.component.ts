import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
values: any;

  constructor(private http:HttpClient) { }
getlogged:any="";
acceptdetails:any="";
payment:any="";
  ngOnInit() {
    const logged=sessionStorage.getItem('user');
    if(logged){
    this.getlogged=JSON.parse(logged);

    }
    this.http.get<any>("http://localhost:3000/OrderAcceptedDetails").subscribe((data)=>{
const values=data.find((b:any)=>
{
  return this.getlogged.email===b.email;
})
if(values){
this.getId(values);
}
})
this.http.get<any>("http://localhost:3000/GenanerateBills").subscribe((bill)=>{
  const getamount=bill.find((c:any)=>{
    return this.getlogged.email===c.email;
  });
  if(getamount){
       this.payment=getamount;
  }
})

  }
getId(values:any){
  this.http.get<any>("http://localhost:3000/OrderAcceptedDetails/"+values.id).subscribe((data)=>{
    this.acceptdetails=data;
        });
}

}
