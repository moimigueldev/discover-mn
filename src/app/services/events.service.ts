import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  

  getEvents() {
    console.log('getting events');


    return this.http.get('http://localhost:3000/events',{headers:this.httpOptions.headers, responseType: 'text'});
  }

}
