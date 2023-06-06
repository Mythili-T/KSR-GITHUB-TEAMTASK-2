import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  show=false;
  openpop(){
    this.show=true;
  }
  closepopup(){
    this.show=false;
  }
  overlay(e:any){
    if(e.target.classList.contains("overlay")){
      this.show=false;
    }
  }
  access(){
    location.pathname = ('/Cart');
  }
  review(){
    location.pathname = ('/images');
  }
  news(){
    location.pathname = ('/images');
  }
  image(){
    location.pathname = ('/images');
  }

}
