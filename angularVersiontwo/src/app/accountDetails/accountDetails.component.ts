import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountDetails',
  templateUrl: './accountDetails.component.html',
  styleUrls: ['./accountDetails.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
