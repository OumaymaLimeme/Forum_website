import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/sponsor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sponsor',
  templateUrl: './view-sponsor.component.html',
  styleUrls: ['./view-sponsor.component.css']
})
export class ViewSponsorComponent implements OnInit {
  sponsors: any [] | undefined
  url: string="http://localhost:8091/";
  constructor(private service:SponsorService,private router:Router){ }
  ngOnInit(): void {
      this.service.getSponsors().subscribe(data=>{
        this.sponsors=data;
      })
  }
  deleteSponsor(id:number){
    this.service.deleteSponsor(id).subscribe(data=>{
      this.sponsors = this.sponsors?.filter(sponsor=> sponsor.sponsor_id!== id);
    })
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
   updateSponsor(id:number){
    this.router.navigate(['update-sponsor', id]);
   }

}
