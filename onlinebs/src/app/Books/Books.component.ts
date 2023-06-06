import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-Books',
  templateUrl: './Books.component.html',
  styleUrls: ['./Books.component.css']
})
export class BooksComponent implements OnInit {
  products:any;

  constructor(private service:BooksService) {
    this.service.getproducts().subscribe(data=>{
      this.products=data;
    })
   }

  ngOnInit() {
  }
  



//   imgCollection: Array<object> =[
//     {
//       image: '../../assets/fantacy/fantasy1.jpg',
//       thumbImage: '../../assets/fantacy/fantasy1.jpg',
//       alt: 'A Game of hrones',
//       title: 'A Game of Thrones'

//     },
//     {
//       image: '../../assets/fantacy/fantasy2.jpg',
//       thumbImage: '../../assets/fantacy/fantasy2.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy3.jpg',
//       thumbImage: '../../assets/fantacy/fantasy3.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy4.jpg',
//       thumbImage: '../../assets/fantacy/fantasy4.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy5.jpg',
//       thumbImage: '../../assets/fantacy/fantasy5.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy6.jpg',
//       thumbImage: '../../assets/fantacy/fantasy6.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy7.jpg',
//       thumbImage: '../../assets/fantacy/fantasy7.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy8.jpg',
//       thumbImage: '../../assets/fantacy/fantasy8.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },
//     {
//       image: '../../assets/fantacy/fantasy9.jpg',
//       thumbImage: '../../assets/fantacy/fantasy4.jpg',
//       alt: 'Image 1',
//       title: 'Image 1'
//     },

// ];

}
