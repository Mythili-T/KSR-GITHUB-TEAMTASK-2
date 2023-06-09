import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetchData.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requestblood',
  templateUrl: './requestblood.component.html',
  styleUrls: ['./requestblood.component.css'],
})
export class RequestbloodComponent implements OnInit {
  data: any = '';
  city: any = '';
  bgroup: any = '';
  phone: boolean = false;
  error: boolean = false;
  selectedname: any;
  form: boolean = false;
  details: boolean = false;
  empty:boolean= true;
  showtable:boolean=false;

  constructor(private fetchdata: FetchDataService, private fb:FormBuilder, private http:HttpClient ) {}

  ngOnInit() {}

  search() {
    this.fetchdata.searchDonors(this.city, this.bgroup).subscribe((data) => {
      if (this.city == '' && this.bgroup == '') {
        alert('Select City and Needed Bloodgroup');
      } else if (this.city == '' || this.bgroup == '') {
        alert('Select both City and Needed Bloodgroup');
      } else if (data.length > 0) {
        this.data = data;
        this.error = false;
        this.empty=false;
        this.showtable=true;
        this.details=false;
        this.selectedname='';
        this.userForm.reset();
      } else {
        this.data = '';
        this.error = true;
        this.empty=false;
      }
    });
  }

  userForm = this.fb.group({
    userName: [, [Validators.required]],
    mobileNumber: [, [Validators.required]],
    emailId: [, [Validators.required]],
  });
  showphno(item: any) {
    this.form = true;
    this.donorDetails(item);
  }
  getDonar() {
    if (this.userForm.invalid) {
      alert('Enter yout Details');
    } else if (this.userForm.valid) {
      this.http
        .post<any>('http://localhost:3000/RequesterDonar', this.userForm.value)
        .subscribe(() => {
          alert('Updated to DB');
        });
      this.details =!this.details;
    }
  }
  donorDetails(item: any) {
    this.selectedname = item;
  }
}
