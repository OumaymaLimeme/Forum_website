import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BesoinService } from 'src/app/besoin.service';

@Component({
  selector: 'app-list-besoins',
  templateUrl: './list-besoins.component.html',
  styleUrls: ['./list-besoins.component.css']
})
export class ListBesoinsComponent {
  besoins: any [] | undefined
  url: string="http://localhost:8091/";
  constructor(private service:BesoinService,private router:Router){ }
  ngOnInit(): void {
      this.service.getBesoins().subscribe(data=>{
        this.besoins=data;
      })
  }
  deleteBesoin(id:number){
    this.service.deleteBesoin(id).subscribe(data=>{
      this.besoins = this.besoins?.filter(besoin=>besoin.besoin_id!== id);
    })
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
   updateBesoin(id:number){
    this.router.navigate(['update-besoins', id]);
   }

}
