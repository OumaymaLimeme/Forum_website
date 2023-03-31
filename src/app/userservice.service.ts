import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }


  getUserData(password: string,usermail: string){
    return this.http.get('http://localhost:8090/user/'+password+'/'+usermail);
  }
}
