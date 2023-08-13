import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { registration } from './reg';
import { registration } from './registration/reg';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (private http:HttpClient){}
   getdetail(){
    return this.http.get<[FormData]>("http://localhost:3000/posts/");
   }
  postdetails(data:registration){
    return this.http.post<any>("http://localhost:3000/posts/",data);
  
  }
  

  }
  

