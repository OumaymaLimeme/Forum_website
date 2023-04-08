import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/entrep.service';

@Component({
  selector: 'app-add-entrep',
  templateUrl: './add-entrep.component.html',
  styleUrls: ['./add-entrep.component.css']
})
export class AddEntrepComponent implements OnInit{
  constructor(private service:EntrepriseService, private router:Router){}
   data:any
   form=new FormGroup({
    nom: new FormControl('', [Validators.required]),
    specialite: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    localisation: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required])
   })
   ngOnInit(): void {   }

submit(){
  this.data=this.form.value
  console.log(this.data)

 this.service.addEntreprise(this.data).subscribe(data=>{
  console.log(data)
 })
 this.router.navigate(['/view-entrep']);

}

}
