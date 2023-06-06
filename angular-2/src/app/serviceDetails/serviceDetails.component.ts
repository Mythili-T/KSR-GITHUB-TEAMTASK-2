import { Component, OnInit , ViewChild} from '@angular/core';
import { DetailServiceService } from '../detailService.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ServiceAcceptedpageComponent } from '../serviceAcceptedpage/serviceAcceptedpage.component';
@Component({
  selector: 'app-serviceDetails',
  templateUrl: './serviceDetails.component.html',
  styleUrls: ['./serviceDetails.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  displayedColumns: string[] = ['custId', 'vehicleNumber', 'mileage','branch','service','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;
  dialog: any;

  constructor(private service:DetailServiceService,private http:HttpClient) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getServiceList();
   }
   getServiceList(){
    this.service.getServiceList().subscribe({
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
  deleteService(id:number){
   this.service.deleteService(id).subscribe({
    next:(res)=>{
      alert('User deleted');
      this.getServiceList();
    }

   })
  }

  open(value:any){
    // var body={
    //   "fname":value.fname,
    //   "lname":value.lname,
    //   "mobile":value.phonenumber,
    //   "email":value.email,
    //   "model":value.models,
    //   "status":"Order Accepted"
    // }
    // this.http.post<any>("http://localhost:3000/OrderAcceptedDetails",body).subscribe(()=>{

    //     this.openDialog(value);
    // });

  }
  openDialog() {
    this.dialog.open(ServiceAcceptedpageComponent, {
      width:'35%',
      height:'65%'
    });
  }
}
