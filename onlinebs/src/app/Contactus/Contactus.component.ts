import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Contactus',
  templateUrl: './Contactus.component.html',
  styleUrls: ['./Contactus.component.css']
})
export class ContactusComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
name: any;
email: any;
message: any;
submitting: boolean | undefined;

  constructor() { }

  ngOnInit() {
  }
  contactForm!: FormGroup;
  submitError: any
}
