import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  visitor() {
    console.log('admin/visitor');
    return this.http.get('/api/visitor', {responseType: 'text'});
  }

}
