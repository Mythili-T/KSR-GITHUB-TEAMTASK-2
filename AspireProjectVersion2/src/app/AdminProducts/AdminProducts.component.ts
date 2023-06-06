import { Component, OnInit } from '@angular/core';
import { WeddingsService } from '../Weddings/weddings.service';
import { Router } from '@angular/router';
import { StudioService } from '../Studio/Studio.service';

@Component({
  selector: 'app-AdminProducts',
  templateUrl: './AdminProducts.component.html',
  styleUrls: ['./AdminProducts.component.css']
})
export class AdminProductsComponent implements OnInit {
data:any;
datastudio:any;
  constructor(private admin:WeddingsService,private route:Router,private adminstudio:StudioService) { }
title:any;
titleStudio:any;
  ngOnInit(){
    this.admin.getProductAdmin().subscribe((show: any)=>{
      this.data=show;
    })
    this.adminstudio.getProductStudioAdmin().subscribe((showstudio :any)=>{
      this.datastudio=showstudio;
    })
  }

  Search(){
this.weddingSearch();
this.studioSearch()
}

//search by title
weddingSearch(){
  if(this.title==""){
    this.ngOnInit();
  }
  else{
    this.data=this.data.filter((result: { title: string; }) =>{
      return result.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  }
}
//search by price
studioSearch(){
  if(this.title==""){
    this.ngOnInit();
  }
  else{
    this.datastudio=this.datastudio.filter((result: { title: string; }) =>{
      return result.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  }
}
}



