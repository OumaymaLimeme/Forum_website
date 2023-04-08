import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from 'src/app/invite.service';
@Component({
  selector: 'app-view-invite',
  templateUrl: './view-invite.component.html',
  styleUrls: ['./view-invite.component.css']
})
export class ViewInviteComponent {
  invites: any [] | undefined
  url: string="http://localhost:8091/";
  constructor(private service:InviteService,private router:Router){ }
  ngOnInit(): void {
      this.service.getInvites().subscribe(data=>{
        this.invites=data;
      })
  }
  deleteInvite(id:number){
    this.service.deleteInvite(id).subscribe(data=>{
      this.invites = this.invites?.filter(invite=> invite.id !== id);
    })
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
   updateInvite(id:number){
    this.router.navigate(['update-invite', id]);
   }
}

