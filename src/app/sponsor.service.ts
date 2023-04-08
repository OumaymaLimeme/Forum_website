import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Sponsor } from './modules/sponsor/Sponsor';

@Injectable({
  providedIn:'root'
})
export class SponsorService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add Sponsor - create
    addSponsor(sponsor:Sponsor){
      return this.http.post<Sponsor>(`${this.url}add-sponsor`,sponsor)
  }
   //Get Sponsor -Read
   getSponsors():Observable<any[]>{
    return this.http.get<any[]>(this.url+`sponsors`)
   }
   // Get Sponsor by Id - Read
   getSponsorById(id: number):Observable<Sponsor>{
    return this.http.get<Sponsor>(`${this.url}sponsor/${id}`)
   }
    // Update Sponsor - Update
    updateSponsor(id?: number,sponsor?: any): Observable<any>{
      return this.http.put<any>(`${this.url}update-sponsor/${id}`, sponsor)
    }

    // Delete Sponsor - Delete
    deleteSponsor(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}delete-sponsor/${id}`)
    }
  }

