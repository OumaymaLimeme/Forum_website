import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invite } from '../Invite';
import { InviteService } from 'src/app/invite.service';
@Component({
  selector: 'app-update-invite',
  templateUrl: './update-invite.component.html',
  styleUrls: ['./update-invite.component.css']
})
export class UpdateInviteComponent {
  entreprise?:Invite
  data: any
  constructor(private service: InviteService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getInviteById(id).subscribe(data => {
      this.entreprise = data
      console.log(this.entreprise)
    })
  }
  form=new FormGroup({
    prenom: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
   })
   submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateInvite(this.entreprise?.invite_id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/view-invite']);
  }
}
