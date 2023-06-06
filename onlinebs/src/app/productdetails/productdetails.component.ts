import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productList:any="";
  searchFor:any="";
  finalproduct:any="";

  constructor(private service:BooksService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.getproducts().subscribe(data=>{
      this.productList=data;

      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){

          if(product.title==this.searchFor){
            this.finalproduct=product;
            break;
          }
        }
      })
    })
  }


}
