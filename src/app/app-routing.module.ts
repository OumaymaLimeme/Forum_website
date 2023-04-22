import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddEntrepComponent } from './modules/entreprise/add-entrep/add-entrep.component';
import { UpdateEntrepComponent } from './modules/entreprise/update-entrep/update-entrep.component';
import { AddInviteComponent } from './modules/invite/add-invite/add-invite.component';
import { UpdateInviteComponent } from './modules/invite/update-invite/update-invite.component';
import { AddSponsorComponent } from './modules/sponsor/add-sponsor/add-sponsor.component';
import { UpdateSponsorComponent } from './modules/sponsor/update-sponsor/update-sponsor.component';
import { AddStandComponent } from './modules/stands/add-stand/add-stand.component';
import { ViewEntrepComponent } from './modules/entreprise/view-entrep/view-entrep.component';
import { ViewInviteComponent } from './modules/invite/view-invite/view-invite.component';
import { ViewSponsorComponent } from './modules/sponsor/view-sponsor/view-sponsor.component';
import { FormulaireComponent } from './modules/formulaire/formulaire.component';
import { UpdateStandsComponent } from './modules/stands/update-stands/update-stands.component';
import { ViewStandsComponent } from './modules/stands/view-stands/view-stands.component';
import { AddBesoinComponent } from './modules/besoins/add-besoin/add-besoin.component';
import { UpdateBesoinsComponent } from './modules/besoins/update-besoins/update-besoins.component';
import { ListBesoinsComponent } from './modules/besoins/list-besoins/list-besoins.component';

const routes: Routes = [
   {path:'view-entrep',component:ViewEntrepComponent},
   {path: 'add', component: AddEntrepComponent },
   {path: 'update/:id', component: UpdateEntrepComponent},

   {path:'view-invite',component:ViewInviteComponent},
   {path:'update-invite/:id',component:UpdateInviteComponent},
   {path:'add-invite',component:AddInviteComponent},

   {path:'add-sponsor',component:AddSponsorComponent},
   {path:'update-sponsor/:id',component:UpdateSponsorComponent},
    {path:'view-sponsor',component:ViewSponsorComponent},

    {path:'add-stands',component:AddStandComponent},
    {path:'update-stands/:id',component:UpdateStandsComponent},
     {path:'view-stands',component:ViewStandsComponent},

     {path:'add-besoin',component:AddBesoinComponent},
     {path:'update-besoins/:id',component:UpdateBesoinsComponent},
      {path:'list-besoins',component:ListBesoinsComponent},

   {path:'add-stand',component:AddStandComponent},
   {path:'login',component:LoginComponent},
   {path:'dashboard', component:DashboardComponent },
   {path :'home',component:HomeComponent},
   {path :'',component:HomeComponent},

   {path:'formulaire',component:FormulaireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
