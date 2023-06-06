import { Component, OnInit } from '@angular/core';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-phantom',
  templateUrl: './phantom.component.html',
  styleUrls: ['./phantom.component.css']
})
export class PhantomComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  url: string = "../../../../assets/ph1-r.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }

  image:string="../../assets/ph4-b.jpg"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/ph7-w.jpg"
  ghost(event: any){
      this.content = event.target.src;
  }
  openDialog() {
    this.dialog.open(ModelsregisterComponent, {
      width:'35%',
      height:'65%'
    });
  }
}
