import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StandsService } from 'src/app/stands.service';

@Component({
  selector: 'app-view-stands',
  templateUrl: './view-stands.component.html',
  styleUrls: ['./view-stands.component.css']
})
export class ViewStandsComponent {
  stands: any [] | undefined
  url: string="http://localhost:8091/";
  constructor(private service:StandsService,private router:Router){ }
  ngOnInit(): void {
      this.service.getStands().subscribe(data=>{
        this.stands=data;
      })
  }
  deleteStands(id:number){
    this.service.deleteEntreprise(id).subscribe(data=>{
      this.stands = this.stands?.filter(stand=> stand.id !== id);
    })
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
   updateStands(id:number){
    this.router.navigate(['update-stands', id]);
   }

}
