import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import {HttpClient} from '@angular/common/http'
import { HomeServService } from '../home/homeServ.service';
@Component({
  selector: 'app-appearal',
  templateUrl: './appearal.component.html',
  styleUrls: ['./appearal.component.css']
})
export class AppearalComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,private http:HttpClient, private service:HomeServService
  ) {
    
  }

  sample:any=""
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/"+this.service.Store).subscribe(data=>{
      this.sample=data;
    })
  }
}
