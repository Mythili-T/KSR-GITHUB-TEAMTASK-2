import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../Model.service';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
getExample:any;
searchFor:any;
finalData:any;
model:any="";
  constructor(private service:ModelService, private route:ActivatedRoute,private detailService:DetailServiceService) {
    this.getExampleImage();
  }


  ngOnInit() {
  }

  getExampleImage(){
    this.detailService.getExampleImage().subscribe((response)=>
    {
       this.getExample=response;
    })
  }
  getTotalModel(){
    return this.getExample.length;
  }

  getTotalGhost(){
    return this.getExample.filter((model: { type: string; })=>model.type==='ghost').length;
  }
  getTotalCullinan(){
    return this.getExample.filter((model: { type: string; })=>model.type==='cullinan').length;
  }
  getTotalPhantom(){
    return this.getExample.filter((model: { type: string; })=>model.type==='phantom').length;
  }
  getTotalWraith(){
    return this.getExample.filter((model: { type: string; })=>model.type==='wraith').length;
  }
  getTotalDawn(){
    return this.getExample.filter((model: { type: string; })=>model.type==='dawn').length;
  }


  modelCount:string="All";

  onFilterRadio(data:string){
    this.modelCount=data;
    console.log(this.modelCount);
  }
}
