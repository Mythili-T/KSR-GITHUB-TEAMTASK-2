import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-Author',
  templateUrl: './Author.component.html',
  styleUrls: ['./Author.component.css']
})
export class AuthorComponent implements OnInit {
  products:any;

  constructor(private service:AuthorService) {
    this.service.getproducts().subscribe(data=>{
      this.products=data;
    })
   }

  ngOnInit() {
  }

}
