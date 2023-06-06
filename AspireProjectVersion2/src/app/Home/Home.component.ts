import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './Home.service';
import { CartService } from '../Cart/Cart.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public loginService:LoginService,private cartService:CartService,private homeService:HomeService,public http:HttpClient) { }
public totalitem=0;
  users:any;

email:any=""
id:any;
firstname:any;
username:any;
checkEmail:any;
ngOnInit():void{

  //login user name
  const user=sessionStorage.getItem('loginUser');
  if(user){
    this.email=JSON.parse(user);
  }

  //get user data from db
  this.homeService.getProducts().subscribe(data=>
    {
      this.users=data;
      this.cart()
    });

  }

  onLogout(){
    this.loginService.onLogout();
    this.totalitem=0;
  }


  //count cart items
  cart(){
 this.cartService.cartProducts().subscribe((res:  any)=>
      {
        this.totalitem = res.length;
      })
  }






}









    // alert(this.email)
    // this.username=users
    // for(var i=0;i<this.username.length;i++){
    //   if(this.email==this.username[i].email){
    //     this.id=i;
    //     alert(this.id)
    //   }
    // }
    // this.firstname=this.username[this.id].firstname;
    // })

  // }


