import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DetailServiceService } from '../detailService.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { OrderAcceptedPageComponent } from '../OrderAcceptedPage/OrderAcceptedPage.component';
@Component({
  selector: 'app-OrderDetails',
  templateUrl: './OrderDetails.component.html',
  styleUrls: ['./OrderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id','models','fname', 'lname','email','phonenumber','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;

  clicked=false;
  constructor(private service:DetailServiceService,private http:HttpClient,private dialog:MatDialog) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getOrderList();
   }
   getOrderList(){
    this.service.getOrderList().subscribe({
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
  deleteOrder(id:number){
   this.service.deleteOrder(id).subscribe({
    next:(res)=>{
      alert('Order Canceled');
      this.getOrderList();
    }

   })
  }

open(value:any){
  var body={
    "fname":value.fname,
    "lname":value.lname,
    "mobile":value.phonenumber,
    "email":value.email,
    "model":value.models,
    "status":"Order Accepted"
  }
  this.http.post<any>("http://localhost:3000/OrderAcceptedDetails",body).subscribe(()=>{
      this.openDialog(value);

  });
  this.a(value);


}
a(value:any){
  var body={
    "status":"Order Accepted"
  }
  this.http.patch<any>("http://localhost:3000/Modelsregister/"+value.id,body).subscribe(()=>{
    alert("patch successfully");

  })
}

openDialog(value:any) {
  this.service.billGenerate=value;
  this.dialog.open(OrderAcceptedPageComponent, {
    width:'35%',
    height:'65%',

  });
 
}


}
function openDialog() {
  throw new Error('Function not implemented.');
}

