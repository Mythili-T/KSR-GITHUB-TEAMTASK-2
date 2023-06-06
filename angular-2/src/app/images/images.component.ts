import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DetailServiceService } from '../detailService.service';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  displayedColumns: string[] = ['id','Model','StartingPrice','imageUrl'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;
  news:any;
  reviews:any;
  constructor(private service:DetailServiceService,private activateRoute:ActivatedRoute) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getImagesList();
     this.getNewsList();
     this.getReviewList();
     this.activateRoute.fragment.subscribe((value)=>{
          console.log(value);
          this.jumpTo(value);
     });

   }
   jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
 }
   getImagesList(){
    this.service.getImagesList().subscribe({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:console.log,
    })
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  products=[
      {name:'Images',right:'News',left:'Reviews'},
      {name:'News'},
      {name:'Reviews'}

     ];

     getNewsList(){
       this.service.getNewsList().subscribe((response)=>
       {
          this.news=response;
       })
     }
     getReviewList(){
      this.service.getReviewList().subscribe((response)=>
       {
          this.reviews=response;
       })
     }

}
