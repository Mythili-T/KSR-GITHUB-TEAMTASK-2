import { Component, OnInit } from '@angular/core';
import { StudioService } from './Studio.service';
import { CartService } from '../Cart/Cart.service';

@Component({
  selector: 'app-Studio',
  templateUrl: './Studio.component.html',
  styleUrls: ['./Studio.component.css']
})
export class StudioComponent  {

  studio:any;
  constructor(private service:StudioService,private cart:CartService)
   {
this.service.getProducts().subscribe(data=>
  {
    this.studio=data;
    this.studio.forEach((a:any)=>{
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
