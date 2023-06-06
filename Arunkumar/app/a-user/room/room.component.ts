import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor( private service:HttpDbService,private fb:FormBuilder) { }

  ExchangeForm= this.fb.group({
    namevalue:[,Validators.required],
    emailvalue:[,Validators.required],
    mobilevalue:[,Validators.required],
    Subject:[,Validators.required],
    Reason:[,Validators.required],
    RoomNo:[,Validators.required],


})
room(){
  this.service.updateRoomQy(this.ExchangeForm.value) .subscribe((data) => alert('sucessfully added'));

}
  ngOnInit() {
  }

}
