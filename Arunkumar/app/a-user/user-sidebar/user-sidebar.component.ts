import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

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
