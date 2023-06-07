import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from '../adminProducts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProductAmount:number=0;
  salesAmount:number=0;
  allUser: number = 0;
  allProducts: number = 0;
  categoryCount:number=0;

  ordersCount:number=0;

  constructor(private user: AdminProductsService, private title:Title) {
    this.user.getUsers().subscribe(user => this.allUser = user.length);
    this.user.getProducts().subscribe(product => this.allProducts = product.length);
    this.user.categoryTypesCount().subscribe( (category) => this.categoryCount = category.length);
    this.user.productTotalAmount().subscribe((totalAmount:number) => {
      this.totalProductAmount = totalAmount;
    });
    this.user.getOrders().subscribe((order:any) => { 
    
      order.forEach((order:any)=>{
        let data = Object.keys(order).filter((key) => Array.isArray(order[key]))[0];
        console.warn(order.totalAmount);
        
        this.salesAmount += order.totalAmount;        
        this.ordersCount += order[data].length;
      });
    })
  }

  ngOnInit() {
    this.title.setTitle('Dashboard | RK MART');
  }
}
