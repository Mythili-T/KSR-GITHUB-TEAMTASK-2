import { Component, OnInit } from '@angular/core';
import { ModelService } from '../Model.service';

@Component({
  selector: 'app-Models',
  templateUrl: './Models.component.html',
  styleUrls: ['./Models.component.css']
})
export class ModelsComponent implements OnInit {


  getProduct:any;
  constructor(private service:ModelService) {
    this.service.getModel().subscribe(data=>{
      this.getProduct=data;
    });
  }
  


  ngOnInit() {
  }

}
