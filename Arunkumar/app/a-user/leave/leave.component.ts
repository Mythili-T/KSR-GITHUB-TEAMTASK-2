import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDbService } from 'src/app/httpDb.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {


  constructor( private service:HttpDbService,private fb:FormBuilder) { }

  ExchangeForm= this.fb.group({
    namevalue:[,Validators.required],
    emailvalue:[,Validators.required],
    mobilevalue:[,Validators.required],
    Subject:[,Validators.required],
    Reason:[,Validators.required],
    RoomNo:[,Validators.required],


})
leave(){
this.service.updateLeaveQy(this.ExchangeForm.value) .subscribe((data) => alert('sucessfully added'));
}

  ngOnInit() {
  }

}
