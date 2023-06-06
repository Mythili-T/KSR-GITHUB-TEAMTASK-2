import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../Cart/Cart.service';
@Injectable({
  providedIn: 'root'
})
export class WeddingDetailsService {

  constructor(private https:HttpClient,public cart:CartService) { }
  getProducts(){
    return this.https.get("http://localhost:3000/weddings/:check")
  }

}
