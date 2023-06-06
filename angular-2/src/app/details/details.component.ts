import { Component, OnInit } from '@angular/core';
import { Example } from '../example';
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[CarsService]
})
export class DetailsComponent implements OnInit {
  [x: string]: any;

  constructor(private carservice:CarsService) { }

  cars!:Car[];
  searchValue: string = '';
ngOnInit(){
  this.cars=this.carservice.cars;
}

  model(){

  }
  event(){

  }





  changeSearchValue(eventData:Event){
      
      this.searchValue=(<HTMLInputElement>eventData.target).value;
  }


  // boxes=document.querySelectorAll('.gallery');
  // searchBox=this._searchValue;


  //  products=[
  //   {name:'Phantom',image:'../../assets/img1-p.webp',left:'../../assets/img2-p.webp',right:'../../assets/img3-p.webp'},
  //   {name:'Cullinan',image:'../../assets/img4-c.jpg',left:'../../assets/img5-c.jpg',right:'../../assets/img6-c.jpg'},
  //   {name:'Ghost',image:'../../assets/img7-g.webp',left:'../../assets/img8-g.webp',right:'../../assets/img9-g.webp'},
  //   {name:'Wraith',image:'../../assets/img10-w.webp',left:'../../assets/img11-w.webp',right:'../../assets/img12-w.webp'},
  //   {name:'Dawn',image:'../../assets/img13-d.jpg',left:'../../assets/img14-d.jpg',right:'../../assets/img15-d.jpg'}

  //  ];



  //  get searchvalue(){
  //   return this._searchValue;
  //  }
  //  set searchvalue(value:string){
  //   this._searchValue=value;
  //  }

  //  ngOnInit() {
  //   this.examples=this.exampleservice.examples;
  // }
// filterExampleByName(filterTerms:string){
//      if(this.examples.length===0||this._searchValue){

//      }
// }




  };




  // searchBox.addEventListener('keyup',(e)=>{
  //   const searchText=e.target.value.toLowerCase().trim();
  //   boxes.forEach((box)=>{
  //     const data=box.dataset.item;
  //    if(data.includes(searchText)){
  //     box.style.display='block';
  //    }
  //    else{
  //     box.style.display='none';
  //    }
  //   });




// function gallery(value: Element, key: number, parent: NodeListOf<Element>): void {
//   throw new Error('Function not implemented.');
// }

