import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  constructor(private http: HttpClient) {

    this.http.get<any>('https://httpget-bebe2-default-rtdb.firebaseio.com'

    ).subscribe(data => {
  console.log(data);
});
  }
}
