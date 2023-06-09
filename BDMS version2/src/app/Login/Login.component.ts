import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterformService } from '../registerform.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any = '';
  password: any = '';
  useremail: any;

  constructor(
    private formbuilder: FormBuilder,
    private registerformService: RegisterformService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  loginForm = this.formbuilder.group({
    email: [, [Validators.required, Validators.pattern]],
    pass: [, [Validators.required]],
  });

  submitForm() {
    this.registerformService.loginUser().subscribe((users) => {
        const user = users.find((u: any) => u.email === this.loginForm.value.email && u.pass === this.loginForm.value.pass
        );
        if (user) {
          alert('login Sucessfully');
          this.loginForm.reset();
          this.registerformService.loggedInUser = user;
          sessionStorage.setItem('loggedInUser', JSON.stringify(user));
          this.route.navigate(['/donor']);
        } else {
          alert('Check your Email or Password');
        }
      });
  }
}
