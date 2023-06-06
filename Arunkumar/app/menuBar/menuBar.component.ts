import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuBar',
  templateUrl: './menuBar.component.html',
  styleUrls: ['./menuBar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }
   //dial-1


   contactModal(){
      const modal:any = document.querySelector("#modal");
      modal.showModal();
   }

   closeModal(){
      const modal:any = document.querySelector("#modal");
      modal.close();
   }
  ngOnInit() {
  }

}
