import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Stands } from './modules/stands/Stands';

@Injectable({
  providedIn:'root'
})
export class StandsService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add Stands - create
    addStands(stands:Stands){
      return this.http.post<Stands>(`${this.url}add-stands`,stands)
  }
   //Get Stands -Read
   getStands():Observable<any[]>{
    return this.http.get<any[]>(this.url+`stands`)
   }
   // Get Stands by Id - Read
   getStandById(id: number):Observable<Stands>{
    return this.http.get<Stands>(`${this.url}stand/${id}`)
   }
    // Update Stands - Update
    updateStands(id?: number ,entreprise?: any): Observable<any>{
      return this.http.put<any>(`${this.url}update-stands/${id}`, entreprise)
    }

    // Delete Stands - Delete
    deleteEntreprise(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}delete-stands/${id}`)
    }
  }

