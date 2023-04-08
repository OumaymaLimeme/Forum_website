import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Invite } from './modules/invite/Invite';

@Injectable({
  providedIn:'root'
})
export class InviteService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add Entreprise - create
    addInvite(entreprise:Invite){
      return this.http.post<Invite>(`${this.url}add-invite`,entreprise)
  }
   //Get Entreprise -Read
   getInvites():Observable<any[]>{
    return this.http.get<any[]>(this.url+`invites`)
   }
   // Get Entreprise by Id - Read
   getInviteById(id: number):Observable<Invite>{
    return this.http.get<Invite>(`${this.url}invite/${id}`)
   }
    // Update Entreprise - Update
    updateInvite(id?: number ,entreprise?: any): Observable<any>{
      return this.http.put<any>(`${this.url}update-invite/${id}`, entreprise)
    }

    // Delete entreprise - Delete
    deleteInvite(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}delete-invite/${id}`)
    }
  }

