import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-adminpagesidebar',
  templateUrl: './adminpagesidebar.component.html',
  styleUrls: ['./adminpagesidebar.component.css']
})
export class AdminpagesidebarComponent implements OnInit {


  constructor(private http:HttpClient,private detailservice:DetailServiceService) { }
  details:any='';
  getLogin:any='';
  service:any='';
  orders:any='';
  ngOnInit() {
    this.detailservice.getLoginDetails().subscribe((details)=>{
      this.getLogin=details;
    });
    this.detailservice.getOrderDetails().subscribe((details)=>{
      this.orders=details;
    });
    this.detailservice.getServiceDetails().subscribe((details)=>{
      this.service=details;
    });

  }

}
// {
    //   this.http.get<any>("http://localhost:3000/Register").subscribe(data=>{
    //     this.patient=data.pipe(map((data: any) => {
    //         return data.id;
    //     }))
    //   });
    // }
