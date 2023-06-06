import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cart/Cart.service';
import { CaterService } from './cater.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent  {

  cater:any;
  constructor(private service:CaterService,private cart:CartService)
   {
this.service.getProducts().subscribe(data=>
  {
    this.cater=data;
    this.cater.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
  });
  })
};
//add to cart
addtocart(items:any){
  this.cart.addtocart(items);
  console.log(items)
  }
}
