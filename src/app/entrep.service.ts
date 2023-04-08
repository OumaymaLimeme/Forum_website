import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Entreprise } from './modules/entreprise/Entreprise';

@Injectable({
  providedIn:'root'
})
export class EntrepriseService{
  private url="http://localhost:8091/";
  constructor(private http : HttpClient){}
    //Add Entreprise - create
    addEntreprise(entreprise:Entreprise){
      return this.http.post<Entreprise>(`${this.url}add`,entreprise)
  }
   //Get Entreprise -Read
   getEntreprises():Observable<any[]>{
    return this.http.get<any[]>(this.url+`entreprises`)
   }
   // Get Entreprise by Id - Read
   getEntrepriseById(id: number):Observable<Entreprise>{
    return this.http.get<Entreprise>(`${this.url}entreprise/${id}`)
   }
    // Update Entreprise - Update
    updateEntreprise(id?: number ,entreprise?: any): Observable<any>{
      return this.http.put<any>(`${this.url}update/${id}`, entreprise)
    }

    // Delete entreprise - Delete
    deleteEntreprise(id: number): Observable<any>{
      return this.http.delete<any>(`${this.url}delete/${id}`)
    }
  }

