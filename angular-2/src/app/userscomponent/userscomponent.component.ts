import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailServiceService } from '../detailService.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-userscomponent',
  templateUrl: './userscomponent.component.html',
  styleUrls: ['./userscomponent.component.css']
})
export class UserscomponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'password','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;

  

  constructor(private service:DetailServiceService) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getUsersList();
   }
   getUsersList(){
    this.service.getUsersList().subscribe({
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
  deleteUser(id:number){
   this.service.deleteUser(id).subscribe({
    next:(res)=>{
      alert('User deleted');
      this.getUsersList();
    }

   })
  }



}
