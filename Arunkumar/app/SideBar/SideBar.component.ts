import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {


  constructor() { }

  openSideBar(){
    let  home_content:any="";
     let btn:any = document.querySelector("#btn");
  let sidebar:any = document.querySelector(".sidebar");
  let searchBtn:any = document.querySelector(".bx-search");
    sidebar.classList.toggle("active");
    home_content.classList.toggle("activehome");


  }



  ngOnInit() {
  }

}
