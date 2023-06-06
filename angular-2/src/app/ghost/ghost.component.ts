import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class GhostComponent implements OnInit {


  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  url: string = "../../assets/g1-b.png";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/g4-w.jpg"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/g7-b.png"
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
