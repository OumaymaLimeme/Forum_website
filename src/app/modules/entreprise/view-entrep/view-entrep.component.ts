import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/entrep.service';
@Component({
  selector: 'app-view-entrep',
  templateUrl: './view-entrep.component.html',
  styleUrls: ['./view-entrep.component.css']
})
export class ViewEntrepComponent implements OnInit {
  entreprises: any [] | undefined
  url: string="http://localhost:8091/";
  constructor(private service:EntrepriseService,private router:Router){ }
  ngOnInit(): void {
      this.service.getEntreprises().subscribe(data=>{
        this.entreprises=data;
      })
  }
  deleteEntreprise(id:number){
    this.service.deleteEntreprise(id).subscribe(data=>{
      this.entreprises = this.entreprises?.filter(entreprise=> entreprise.id !== id);
    })
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
   updateEntreprise(id:number){
    this.router.navigate(['update', id]);
   }

}
