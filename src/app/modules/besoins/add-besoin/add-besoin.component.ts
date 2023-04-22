import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BesoinService } from 'src/app/besoin.service';

@Component({
  selector: 'app-add-besoin',
  templateUrl: './add-besoin.component.html',
  styleUrls: ['./add-besoin.component.css']
})
export class AddBesoinComponent {
  constructor(private service:BesoinService, private router:Router){}
  data:any
  form=new FormGroup({
    besoin_log : new FormControl('', [Validators.required]),
    besoin_tech: new FormControl('', [Validators.required]),
    facture: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {   }

submit(){
 this.data=this.form.value
 console.log(this.data)

this.service.addBesoin(this.data).subscribe(data=>{
 console.log(data)
})
this.router.navigate(['/list-besoins']);

}

}
