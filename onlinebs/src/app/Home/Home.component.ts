import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;
  constructor(private service:BooksService) {
    this.service.getproducts().subscribe(data=>{
      this.products=data;
    })
   }

  ngOnInit() {
  }

  imgCollection: Array<object> =[
    {
      image: '../../assets/slideimg7.jpg',
      thumbImage: '../../assets/slideimg7.jpg',


    },
    {
      image: '../../assets/slideimg2.jpg',
      thumbImage: '../../assets/slideimg2.jpg',
      alt: 'George Orwell',
      title: 'George Orwell'
    },
    {
      image: '../../assets/slideimg3.jpg',
      thumbImage: '../../assets/slideimg3.jpg',
      alt: 'Ayn Rand',
      title: 'Ayn Rand'
    },
    {
      image: '../../assets/slideimg4.jpg',
      thumbImage: '../../assets/slideimg4.jpg',
      alt: 'Fannie Flagg',
      title: 'Fannie Flagg'
    },
    {
      image: '../../assets/slideimg5.jpg',
      thumbImage: '../../assets/slideimg5.jpg',
      alt: 'George R. R. Martin',
      title: 'George R. R. Martin'
    },
    {
      image: '../../assets/slideimg6.jpg',
      thumbImage: '../../assets/slideimg6.jpg',
      alt: 'Fannie Flagg',
      title: 'Fannie Flagg',
    },
    {
      image: '../../assets/slideimg1.jpg',
      thumbImage: '../../assets/slideimg1.jpg',
      alt: 'J.K. Rowling',
      title: 'J.K. Rowling'
    },
    {
      image: '../../assets/slideimg8.jpg',
      thumbImage: '../../assets/slideimg8.jpg',
      // alt: 'Image 1',
      // title: 'Image 1'
    },
    {
      image: '../../assets/slideimg9.jpg',
      thumbImage: '../../assets/slideimg9.jpg',
      // alt: 'Image 1',
      // title: 'Image 1'
    },
    {
      image: '../../assets/slideimg10.jpg',
      thumbImage: '../../assets/slideimg10.jpg',
      // alt: 'Image 1',
      // title: 'Image 1'
    }

];

}
