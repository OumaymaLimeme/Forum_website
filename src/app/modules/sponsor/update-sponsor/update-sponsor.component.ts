import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../Sponsor';
import { SponsorService } from 'src/app/sponsor.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-sponsor',
  templateUrl: './update-sponsor.component.html',
  styleUrls: ['./update-sponsor.component.css']
})
export class UpdateSponsorComponent implements OnInit{
  sponsor?:Sponsor
  data: any
  constructor(private service: SponsorService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getSponsorById(id).subscribe(data => {
      this.sponsor = data
      console.log(this.sponsor)
    })
  }
  form=new FormGroup({
    nom: new FormControl('', [Validators.required]),
    specialite: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    type_package: new FormControl('', [Validators.required])
   })
   submit(){
    this.data = this.form.value
    console.log(this.data)
    this.service.updateSponsor(this.sponsor?.sponsor_id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/view-sponsor']);
  }
}
