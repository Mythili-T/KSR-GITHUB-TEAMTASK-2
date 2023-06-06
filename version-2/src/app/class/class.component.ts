import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  getUser:any='';
  ngOnInit() {
    const data=sessionStorage.getItem('loginUser');
    if(data){
      this.getUser=JSON.parse(data);
    }
  }

}
