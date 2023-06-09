import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterformService } from '../registerform.service';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-donorUpdateprofile',
  templateUrl: './donorUpdateprofile.component.html',
  styleUrls: ['./donorUpdateprofile.component.css']
})
export class DonorUpdateprofileComponent implements OnInit {
  loggedInUser: any;
  updateForm:any;
  submitbutton:boolean=true;

  constructor(
    private fb: FormBuilder,
    private registerformService: RegisterformService,
    private router: Router
  ) {}

  ngOnInit() {

    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.registerformService.loggedInUser !== null) {
      this.loggedInUser = this.registerformService.loggedInUser;
    } else {
      alert('You are Loggedout. Login to countinue');
      this.router.navigate(['/login']);
    }

    this.updateForm = this.fb.group({
      uname:[,[Validators.required,Validators.pattern,Validators.minLength(3)]],
      age:[,[Validators.required,Validators.min(18),Validators.max(65)]],
      bgroup: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno: ['', Validators.required],
      city: ['', Validators.required],
      pass: ['', Validators.required],
      cpass: ['', Validators.required]
    });

    // Get the logged in user's details
    this.registerformService.getUserById(this.loggedInUser.id).subscribe(
      (user) => {
        this.loggedInUser = user;
        // Set the form values with the user's existing details
        this.updateForm.setValue({
          uname: user.uname,
          age: user.age,
          bgroup: user.bgroup,
          weight: user.weight,
          gender: user.gender,
          email: user.email,
          phno: user.phno,
          city: user.city,
          pass: user.pass,
          cpass: user.cpass,
          id: user.id
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdate() {
    const id = this.updateForm.value.id;
    const body = this.updateForm.value;
    delete body.id;
    this.registerformService.updateUserInformation(body, this.loggedInUser.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    alert("Your profile can be Updated");
    
  }
  
}