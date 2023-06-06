import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
addUser: any;

constructor(private http:HttpClient) { }
getLoginDetails(){
  return this.http.get("http://localhost:3000/Register");
}
getServiceDetails(){
  return this.http.get("http://localhost:3000/serviceDetails");
}
getOrderDetails(){
  return this.http.get("http://localhost:3000/Modelsregister");
}
getUsersList():Observable<any>{
    return this.http.get('http://localhost:3000/Register');
}
deleteUser(id:number):Observable<any>{
   return this.http.delete(`http://localhost:3000/Register/${id}`);
}
getOrderList():Observable<any>{
  return this.http.get('http://localhost:3000/Modelsregister');
}
deleteOrder(id:number):Observable<any>{
  return this.http.delete(`http://localhost:3000/Modelsregister/${id}`);
}
getServiceList():Observable<any>{
  return this.http.get('http://localhost:3000/serviceDetails');
}
deleteService(id:number):Observable<any>{
  return this.http.delete(`http://localhost:3000/serviceDetails/${id}`);
}
getImagesList():Observable<any>{
 return this.http.get(' http://localhost:3000/Images');
}
getNewsList():Observable<any>{
       return this.http.get(' http://localhost:3000/News');
}
getReviewList():Observable<any>{
 return this.http.get(' http://localhost:3000/Reviews ');
}
getExampleImage():Observable<any>{
  return this.http.get(' http://localhost:3000/ExampleImages');
}
billGenerate:any;
value:any;
}
