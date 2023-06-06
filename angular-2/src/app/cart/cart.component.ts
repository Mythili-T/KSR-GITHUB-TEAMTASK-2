import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value)=>{
      console.log(value);
     this.jumpTo(value);
    });
  }
  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
 }
 
  // show=true;
  // closepopup(){
  //   this.show=false;
  //   location.pathname = ('/About');
  // }

  // page(e:any){
  //   if(e.target.classList.contains("page")){
  //     this.show=false;
  //   }
  // }
}
