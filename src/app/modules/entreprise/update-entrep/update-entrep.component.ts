import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from 'src/app/entrep.service';
import { Entreprise } from '../Entreprise';
@Component({
  selector: 'app-update-entrep',
  templateUrl: './update-entrep.component.html',
  styleUrls: ['./update-entrep.component.css']
})
export class UpdateEntrepComponent  implements OnInit{
  entreprise?:Entreprise
  data: any
  constructor(private service: EntrepriseService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEntrepriseById(id).subscribe(data => {
      this.entreprise = data
      console.log(this.entreprise)
    })
  }
  form=new FormGroup({
    nom: new FormControl('', [Validators.required]),
    specialite: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required])
   })
   submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateEntreprise(this.entreprise?.entrep_id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/view-entrep']);
  }
}
