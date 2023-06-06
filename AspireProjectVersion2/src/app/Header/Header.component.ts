import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';
import { CartService } from '../Cart/Cart.service';
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalitem = 0;

  constructor(private http:HttpClient,public loginService:LoginService,private service:CartService,private cartService:CartService) { }
  users:any;

  email:any=""
  ngOnInit() {
    const user=sessionStorage.getItem('loginUser');
  if(user){
    this.email=JSON.parse(user);
  }
    this.totalcart();

  }

onLogout(){
  this.loginService.onLogout();
  this.totalitem=0;
}

totalcart(){
  this.service.cartProducts().subscribe((res:  any)=>
      {
        this.totalitem = res.length;
      })
}


}




