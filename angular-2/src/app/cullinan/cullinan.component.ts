import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';

@Component({
  selector: 'app-cullinan',
  templateUrl: './cullinan.component.html',
  styleUrls: ['./cullinan.component.css']
})
export class CullinanComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  url: string = "../../assets/cul1-b.png";
  imageChange(event: any){
      this.url = event.target.src;
  }
  image:string="../../assets/cul4-r.png"
  Change(event: any){
      this.image = event.target.src;
  }
  content:string="../../assets/cul7-y.png"
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
