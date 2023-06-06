import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }
  butn(){
    const butn:any=document.querySelector('.butn');
    const para:any=document.querySelector('.para');
    para.classList.toggle('show-more');
    if(butn.innerText==='more about'){
        butn.innerText="read less";
    }
    else{
        butn.innerText="more about";
    }
}





  ngOnInit() {
  }  }


