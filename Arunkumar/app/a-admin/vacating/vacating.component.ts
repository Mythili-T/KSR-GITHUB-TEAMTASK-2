import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SideBarComponent } from 'src/app/SideBar/SideBar.component';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-vacating',
  templateUrl: './vacating.component.html',
  styleUrls: ['./vacating.component.css']
})
export class VacatingComponent implements OnInit {

  feesstatus: any;
  Uservacate:  any;

  constructor(private fb:FormBuilder,private http:HttpDbService) {
    this.http. vacateRoomUser().subscribe((data:any)=>{
       this.feesstatus=data;
       console.log(this.feesstatus);
    }

    )
  }

  viewbtn(){
    let viewbtn:any = document.querySelector("#viewbtn");
    let table_view:any= document.querySelector(".table_view");
    table_view.classList.toggle("show_view");


  }
  update_btn(){

    let update_btn:any = document.querySelector("#update_btn");
    let table_updates:any= document.querySelector(".fees_container");
    table_updates.classList.toggle("show_update");


  }


//   accpting(filled:any):void{
// this.http.updateProfile(`http://localhost:3000/vacated',this.feesstatus).subscribe(()=>{
//   console.log('sucesss');
// });}
//   rejecting(filled:any){

//   }

//   feesform(){
//     return this.http. vacateRoomUser().subscribe((data)=>{
//     this.Uservacate=data;
//     console.log( this.Uservacate);
//     })}

  ngOnInit() {
  }

}
