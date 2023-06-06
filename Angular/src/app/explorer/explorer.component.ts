import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productService.getProductsDescription().subscribe((product) => {
      this.allProduct = product;

      this.route.paramMap.subscribe((url) => {
        this.requiredProduct = url.get('check');
        this.finalProduct = this.allProduct.find( (product:any) => this.requiredProduct == product.ProductName );
      });
    });
  }

  ngOnInit() {}
}
