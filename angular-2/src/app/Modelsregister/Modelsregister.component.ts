import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-Modelsregister',
  templateUrl: './Modelsregister.component.html',
  styleUrls: ['./Modelsregister.component.css']
})
export class ModelsregisterComponent implements OnInit {
  register: any;
retUrl:any;
  constructor(private fb:FormBuilder, private service:ServiceService,private route:Router) { }
   OrdersForm=this.fb.group({
    models:[,[Validators.required]],
    Title:[,[Validators.required]],
    fname:[,[Validators.required]],
    lname:[,[Validators.required]],
    phonenumber:[,[Validators.required]],
    email:[,[Validators.required]]
  })
  ngOnInit() {}
  formRegister() {
      this.service.postOrderDetails(this.OrdersForm.value).subscribe((data: any)=>{
      alert('Form Submitted');
      this.OrdersForm.reset();
      
    })

    }

}
