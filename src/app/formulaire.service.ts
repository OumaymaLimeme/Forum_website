import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Invite } from './modules/invite/Invite';

@Injectable({
  providedIn:'root'
})
export class FormulaireService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add invite
    addInvite(invite:Invite){
      return this.http.post<Invite>(`${this.url}add-invite`,invite)
  }
}
