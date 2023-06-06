import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  queryUrl:any="http://localhost:3000/queryDetails";
constructor(private http:HttpClient) { }

postQueryDetails(body:any){
  return this.http.post(this.queryUrl,body);
}

getQueryDetails(){
  return this.http.get(this.queryUrl);
}

}
