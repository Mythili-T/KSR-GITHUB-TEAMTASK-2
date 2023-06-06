import { Component, OnInit,Input } from '@angular/core';
import { DetailServiceService } from '../detailService.service';

@Component({
  selector: 'app-loginDetails',
  templateUrl: './loginDetails.component.html',
  styleUrls: ['./loginDetails.component.css']
})
export class LoginDetailsComponent implements OnInit {

  constructor(private service:DetailServiceService) { }
  getLogin:any='';
  ngOnInit() {
    this.service.getLoginDetails().subscribe(value=>{
        return this.getLogin=value;
    })
  }

  

}
