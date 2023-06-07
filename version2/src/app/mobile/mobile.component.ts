import { Component, OnInit } from '@angular/core';
import { MobileProductsService } from '../mobileProducts.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
getdetails:any;
  constructor(private service:MobileProductsService) { 
    this.service.getproduct().subscribe(value=>{ 
      this.getdetails=value;
    })
  }

  ngOnInit() {
  }

}
