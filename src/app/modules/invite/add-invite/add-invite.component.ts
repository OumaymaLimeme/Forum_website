import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InviteService } from 'src/app/invite.service';

@Component({
  selector: 'app-add-invite',
  templateUrl: './add-invite.component.html',
  styleUrls: ['./add-invite.component.css']
})
export class AddInviteComponent {
  constructor(private service:InviteService, private router:Router){}
  data:any
  form=new FormGroup({
   prenom: new FormControl('', [Validators.required]),
   nom: new FormControl('', [Validators.required]),
   email: new FormControl('', [Validators.required]),
   telephone: new FormControl('', [Validators.required]),
   sex: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {   }

submit(){
 this.data=this.form.value
 console.log(this.data)

this.service.addInvite(this.data).subscribe(data=>{
 console.log(data)
})
this.router.navigate(['/view-invite']);

}
}
