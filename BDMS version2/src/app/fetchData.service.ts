import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  url = 'http://localhost:3000/registeredusers';


  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  searchDonors(city: string, bgroup: string): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.city === city && item.bgroup === bgroup
        );
      })
    );
  }
}
