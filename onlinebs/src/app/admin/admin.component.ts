import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { BookModel } from './book-dash board.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
formValue!:FormGroup
bookData!:any;
showAdd!:boolean;
showUpdate!:boolean;
bookModelObj:BookModel=new BookModel()
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit() :void{
    this.formValue=this.formbuilder.group({
      title:[''],
      description:[''],
      price:[''],
      rating:[''],
      catagory:[''],
      thumbnail:['']

    })
    this.getAllBook()
  }
  clickAddBook(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postBookDetails(){
    this.bookModelObj.title=this.formValue.value.title;
    this.bookModelObj.description=this.formValue.value.description;
    this.bookModelObj.price=this.formValue.value.price;
    this.bookModelObj.rating=this.formValue.value.rating;
    this.bookModelObj.catagory=this.formValue.value.catagory;
    this.bookModelObj.thumbnail=this.formValue.value.thumbnail;

this.api.postBook(this.bookModelObj)
.subscribe(res=>{
  console.log(res);
  alert("Book Added Successfully");
  this.formValue.reset();
  let ref = document.getElementById('cancel')
  ref?.click();
  this.getAllBook();

},ere=>{
  alert("Something went wrong")
})
  }
  getAllBook(){
    this.api.getBook()
    .subscribe(res=>{
      this.bookData=res;
    })
  }
  deleteBook(row : any){
    this.api.deleteBook(row.id)
    .subscribe(res=>{
      alert("Book Deleted")
      this.getAllBook();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
      this.showUpdate=true;
    this.bookModelObj.id=row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['rating'].setValue(row.rating);
    this.formValue.controls['catagory'].setValue(row.catagory);
    this.formValue.controls['thumbnail'].setValue(row.thumbnail);

  }
  updateBookDetails(){
    this.bookModelObj.title=this.formValue.value.title;
    this.bookModelObj.description=this.formValue.value.description;
    this.bookModelObj.price=this.formValue.value.price;
    this.bookModelObj.rating=this.formValue.value.rating;
    this.bookModelObj.catagory=this.formValue.value.catagory;
    this.bookModelObj.thumbnail=this.formValue.value.thumbnail;

    this.api.updateBook(this.bookModelObj,this.bookModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      this.formValue.reset();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.getAllBook();
    })

  }

}
function clickAddBook() {
  throw new Error('Function not implemented.');
}

