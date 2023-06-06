import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}
  LoginForm = this.fb.group({
    username: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    passwordvalue: [, Validators.required],
    confirmpasswordvalue: [, Validators.required]
  });
  error: boolean = false;

  loginform(email:any) {
    console.log(email);
    
    sessionStorage.setItem('emailDetails',email)
    this.user();
    this.admin();
    if (this.error) {
      alert('error');
      this.error=false;
    }
  }

  user() {
    this.http.get<any>('  http://localhost:3000/studentlogin').subscribe((value) => {
      const user = value.find(
        (u: any) =>
          u.emailvalue === this.LoginForm.value.emailvalue &&
          u.passwordvalue === this.LoginForm.value.passwordvalue
      );

      if (user) {
        alert('login sucessful');
        this.LoginForm.reset();
        this.route.navigate(['/Profile-user']);

      }
      this.error = false;
    });
  }
  admin() {
    this.http.get<any>('http://localhost:3000/admin').subscribe((admin) => {
      const user = admin.find(
        (u: any) =>
          u.emailid === this.LoginForm.value.emailvalue &&
          u.password === this.LoginForm.value.passwordvalue
      );

      if (user) {
        alert('login sucessful');
        this.LoginForm.reset();
        this.route.navigate(['/Room']);
      } else {
        this.error = true;
      }
    });
  }

  ngOnInit(): void {}
}
