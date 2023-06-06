import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students-profile',
  templateUrl: './students-profile.component.html',
  styleUrls: ['./students-profile.component.css'],
})
export class StudentsProfileComponent implements OnInit {
  userdata: any;
  room: any;
  students: any;
  studentId: any;
  constructor(
    private service: HttpDbService,
    private fb: FormBuilder,
    private http: HttpClient,
    private location: Location
  ) {
    this.service.studentProfile().subscribe((data: any) => {
      this.userdata = data;
    });
    this.service.getaddroom().subscribe((data: any) => {
      this.room = data;
    });
    this.http
      .get('http://localhost:3000/Studentdata')
      .subscribe((data: any) => {
        this.students = data;
      });
  }

  show_view() {
    let viewbtn: any = document.querySelector('#viewbtn');
    let table_view: any = document.querySelector('.table_view');
    table_view.classList.toggle('show_view');
  }
  show_update() {
    let update_btn: any = document.querySelector('#update_btn');
    let table_updates: any = document.querySelector('.table_updates');
    table_updates.classList.toggle('show_update');
  }
  sort: any;
  error: boolean = false;
  hide: boolean = false;
  data: any = '';
  hide1: boolean = true;
  search() {
    this.service.searchUser(this.sort).subscribe((data) => {
      if (data.length > 0) {
        this.data = data;
        this.hide = true;
        this.error = false;
        this.hide1 = false;
      } else {
        this.data = '';
        this.hide = false;
        this.error = true;
        this.hide1 = false;
      }
    });
    console.log(this.sort);
  }

  newstudent = this.fb.group({
    name: [, Validators.required],
    mobile: [, Validators.required],
    age: [, Validators.required],
    Fathername: [, Validators.required],
    mothername: [, Validators.required],
    Email: [, Validators.required],
    permentaddress: [, Validators.required],
    collegename: [, Validators.required],
    Adharnumber: [, Validators.required],
    roomnumber: [, Validators.required],
    regNo: [, Validators.required],
  });

  deleteData() {
    this.students.forEach((element: any) => {
      if (element.regNo == this.newstudent.controls['regNo'].value) {
        this.studentId = element.id;
      }
    });
    return this.service.deleteStudent(this.studentId).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
  }
  // deteleRoomNo(){ this.Service.forEach((element:any)=>{ })}

  ngOnInit() {}
  studentinfo() {
    return this.service
      .addstudent(this.newstudent.value)
      .subscribe((data) => alert('sucessfully added'));
  }
}
