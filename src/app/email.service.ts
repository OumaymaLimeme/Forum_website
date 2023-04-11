import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './home/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:8091/sendMail';

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<any> {
    return this.http.post<any>(this.emailUrl, email);

  }
}
