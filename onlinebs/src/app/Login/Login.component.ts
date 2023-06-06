import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  namevalue: any = '';
  passwordvalue: any = '';
  retUrl: any = 'home';
  constructor(
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http:HttpClient,
    private guard:AuthGuard

  ) {}

  regform = this.fb.group(
    {
      namevalue: [, Validators.required],
      emailvalue: [, Validators.required],
      mobilevalue: [, Validators.required],
      passwordvalue: [, Validators.required],
      confirmpasswordvalue: [, Validators.required],
    }
    // {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  );
  ngOnInit() {
    emailvalue:['']
    passwordvalue:['']
    this.route.queryParamMap.subscribe((parama) => {
      this.retUrl = parama.get('retUrl');
      console.log('LoginComponent/ngOnInit', this.retUrl);
    });
  }
  onLogin() {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.emailvalue === this.regform.value.namevalue && a.passwordvalue === this.regform.value.passwordvalue
      });
      if(user){
        // return of(this.isLoggedIn);
        alert('Login Success');
        sessionStorage.setItem('userLogin','true')
        this.service.isLoggedIn=Boolean(sessionStorage.getItem('userLogin'));
        this.regform.reset();
        // this.router.navigate([this.retUrl])
        // console.log('return to' + this.retUrl);
        // (this.retUrl != null)
          this.router.navigate(['books']);
          // location.reload();
      }else{
        alert('user not found');
      }
    })

  }
  isLoggedIn(isLoggedIn: any): void {
    throw new Error('Method not implemented.');
  }

}
