import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Besoin } from './modules/besoins/Besoin';

@Injectable({
  providedIn:'root'
})
export class BesoinService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add Besoin - create
    addBesoin(besoin:Besoin){
      return this.http.post<Besoin>(`${this.url}add-besoin`,besoin)
  }
   //Get Besoin -Read
   getBesoins():Observable<any[]>{
    return this.http.get<any[]>(this.url+`besoins`)
   }
   // Get Besoin by Id - Read
   getBesoinById(id: number):Observable<Besoin>{
    return this.http.get<Besoin>(`${this.url}besoin/${id}`)
   }
    // Update Besoin - Update
    updateBesoin(id?: number ,besoin?: any): Observable<any>{
      return this.http.put<any>(`${this.url}update-besoin/${id}`, besoin)
    }

    // Delete Besoin - Delete
    deleteBesoin(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}delete-besoin/${id}`)
    }
  }

