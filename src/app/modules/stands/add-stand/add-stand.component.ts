import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StandsService } from 'src/app/stands.service';

@Component({
  selector: 'app-add-stand',
  templateUrl: './add-stand.component.html',
  styleUrls: ['./add-stand.component.css']
})
export class AddStandComponent {
  constructor(private service:StandsService, private router:Router){}
   data:any
   form=new FormGroup({
    nom_entreprise: new FormControl('', [Validators.required]),
    nom_proprietaire: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    emplacement: new FormControl('', [Validators.required]),
    type_pack: new FormControl('', [Validators.required])

   })
   ngOnInit(): void {   }

submit(){
  this.data=this.form.value
  console.log(this.data)

 this.service.addStands(this.data).subscribe(data=>{
  console.log(data)
 })
 this.router.navigate(['/view-stands']);

}

}
