import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl="localhost:8080/"
  constructor(private http:HttpClient) { }
  createUser(formdata:any){
    return this.http.post(this.baseurl,formdata);
  }
}
