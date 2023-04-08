import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SponsorService } from 'src/app/sponsor.service';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent {
  constructor(private service: SponsorService, private router:Router){}
  data:any
  form=new FormGroup({
   nom: new FormControl('', [Validators.required]),
   specialite: new FormControl('', [Validators.required]),
   email: new FormControl('', [Validators.required]),
   adresse: new FormControl('', [Validators.required]),
   telephone: new FormControl('', [Validators.required]),
   budget: new FormControl('', [Validators.required]),
   type_package: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {   }

submit(){
 this.data=this.form.value
 console.log(this.data)

this.service.addSponsor(this.data).subscribe(data=>{
 console.log(data)
})
this.router.navigate(['/view-sponsor']);

}
}
