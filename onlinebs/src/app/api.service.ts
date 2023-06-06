import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }
postBook(data:any){
  return this.http.post<any>("http://localhost:3000/products",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getBook(){
  return this.http.get<any>("http://localhost:3000/products")
  .pipe(map((res:any)=>{
    return res;
  }))
}
updateBook(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/products/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteBook(id:number){
  return this.http.delete<any>("http://localhost:3000/products/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}


}
