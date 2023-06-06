import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttonfilter',
  templateUrl: './buttonfilter.component.html',
  styleUrls: ['./buttonfilter.component.css']
})
export class ButtonfilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input('total') all:number=0;
@Input() ghost:number=0;
@Input() cullinan:number=0;
@Input() phantom:number=0;
@Input() wraith:number=0;
@Input() dawn:number=0;

searchradio:string="All";

@Output()
fiterradiochange:EventEmitter<string>=new EventEmitter<string>

onradiobuttonchange(){
  this.fiterradiochange.emit(this.searchradio);
//console.log(this.searchradio);
}
}
