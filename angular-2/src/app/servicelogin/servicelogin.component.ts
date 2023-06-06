import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-servicelogin',
  templateUrl: './servicelogin.component.html',
  styleUrls: ['./servicelogin.component.css']
})
export class ServiceloginComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:ServiceService) { }
  serviceForm=this.fb.group({
    custId:[,[Validators.required]],
    vehicleNumber:[,[Validators.required]],
    mileage:[,[Validators.required]],
    email: [,[Validators.required, Validators.pattern('^([a-zA-Z0-9.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$')]],
    branch:[,[Validators.required]],
    service:[,[Validators.required]]
  })
  ngOnInit() {}
  submit(){
    this.service.postServiceDetails(this.serviceForm.value).subscribe(data=>{
      alert("Form Submitted Successfully");
      this.serviceForm.reset();
    });
  }

}
