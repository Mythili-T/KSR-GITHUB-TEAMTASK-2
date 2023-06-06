import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeddingsService } from '../Weddings/weddings.service';
import { CartService } from '../Cart/Cart.service';
@Component({
  selector: 'app-wedding-details',
  templateUrl: './wedding-details.component.html',
  styleUrls: ['./wedding-details.component.css']
})
export class WeddingDetailsComponent implements OnInit {
productList:any="";
searchFor:any="";
finalProduct:any="";
  constructor(private service:WeddingsService,private route:ActivatedRoute,public cart:CartService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data=>{
      this.productList=data;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
    });
        this.route.params.subscribe(paramdata=>{
          this.searchFor=paramdata['check'];
          for(let product of this.productList){
            // if(product.titleDescription==this.searchFor){
            //   this.finalProduct=product;
            //   break
            // }
            // if(product.title==this.searchFor){
            //   this.finalProduct=product;
            //   break
            // }
            if(product.id==this.searchFor){
              this.finalProduct=product;
              break;
            }
          }
        })
      })

  }



  //studio work
  

  //add to cart
  addtocart(finalProduct:any){
    this.cart.addtocart(finalProduct);
    console.log(finalProduct)
    }

}
