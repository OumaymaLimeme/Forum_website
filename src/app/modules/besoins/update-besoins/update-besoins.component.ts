import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Besoin } from '../Besoin';
import { BesoinService } from 'src/app/besoin.service';

@Component({
  selector: 'app-update-besoins',
  templateUrl: './update-besoins.component.html',
  styleUrls: ['./update-besoins.component.css']
})
export class UpdateBesoinsComponent {
  besoin?:Besoin
  data: any
  constructor(private service: BesoinService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getBesoinById(id).subscribe(data => {
      this.besoin = data
      console.log(this.besoin)
    })
  }
  form=new FormGroup({
    besoin_log : new FormControl('', [Validators.required]),
    besoin_tech: new FormControl('', [Validators.required]),
    facture: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })
   submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateBesoin(this.besoin?.besoin_id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/list-besoins']);
  }
}
