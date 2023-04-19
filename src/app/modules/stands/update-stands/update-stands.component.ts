import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stands } from '../Stands';
import { StandsService } from 'src/app/stands.service';

@Component({
  selector: 'app-update-stands',
  templateUrl: './update-stands.component.html',
  styleUrls: ['./update-stands.component.css']
})
export class UpdateStandsComponent {
  stands?:Stands
  data: any
  constructor(private service: StandsService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getStandById(id).subscribe(data => {
      this.stands = data
      console.log(this.stands)
    })
  }
  form=new FormGroup({
    nom_entreprise: new FormControl('', [Validators.required]),
    nom_proprietaire: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    type_pack: new FormControl('', [Validators.required]),
    emplacement: new FormControl('', [Validators.required]),
   })
   submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateStands(this.stands?. id_stands, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/view-stands']);
  }
}
