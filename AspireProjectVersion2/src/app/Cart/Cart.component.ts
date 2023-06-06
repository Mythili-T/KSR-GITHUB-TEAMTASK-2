import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './Cart.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
public products!:any[];
public grandtotal:number=0;
total:any;
  constructor(public cart:CartService) { }
  ngOnInit():void{
    this.cart.cartProducts().subscribe(res=>{
      this.products=res;
      this.grandtotal = this.cart.gettotalprice();
    })
    }

//remove all items in cart
emptycart(){
  this.cart.removeAll();
}

//remove one item in cart
removeone(item:any){
  this.cart.removeoneitem(item);
}
//increase
increase() {
  this.cart.updateCartItems(this.total+1);
}

decrease() {
  this.cart.updateCartItems(this.total-1);
}
}
