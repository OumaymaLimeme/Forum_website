import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getUserData(password: string,email: string){
    return this.http.get('http://localhost:8091/user/'+password+'/'+email);
  }
}
