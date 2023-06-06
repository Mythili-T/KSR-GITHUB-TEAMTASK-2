import { Component, OnInit } from '@angular/core';
import { WeddingsService } from './weddings.service';
import { CartService } from '../Cart/Cart.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-Weddings',
  templateUrl: './Weddings.component.html',
  styleUrls: ['./Weddings.component.css']
})
export class WeddingsComponent implements OnInit {
public weddings:any;
title:any;
titleDescription:any;
p:number=1;
currentPage: number = 1;

  constructor(public service:WeddingsService,public cart:CartService,private client:HttpClient)
   {}
ngOnInit():void{
this.service.getProducts().subscribe(data=>
  {
    this.weddings=data;
    this.weddings.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
  });
});
}

//search the wedding list
Search(){
  if(this.title==""){
    this.ngOnInit();
  }
  else{
    this.weddings=this.weddings.filter((result: { title: string; }) =>{
      return result.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  }
}
loadData(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//on page change
onPageChange(page: number): void {
  this.currentPage = page;
  this.loadData();
}

//add to cart

addtocart(items:any){
this.cart.addtocart(items);
console.log(items)
}




}

