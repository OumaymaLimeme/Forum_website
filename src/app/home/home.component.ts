import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:EmailService, private router:Router){}
   data:any
   form=new FormGroup({
    recipient: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
   })
   ngOnInit(): void {   }

submit(){
  this.data=this.form.value
  console.log(this.data)
  alert("Email sent succefully");
   this.service.sendEmail(this.data).subscribe(data=>{
  console.log(data)
 })

}
}
