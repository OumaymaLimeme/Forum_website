import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddEntrepComponent } from './modules/entreprise/add-entrep/add-entrep.component';
import { DelEntrepComponent } from './modules/entreprise/del-entrep/del-entrep.component';
import { UpdateEntrepComponent } from './modules/entreprise/update-entrep/update-entrep.component';
import { AddInviteComponent } from './modules/invite/add-invite/add-invite.component';
import { DelInviteComponent } from './modules/invite/del-invite/del-invite.component';
import { UpdateInviteComponent } from './modules/invite/update-invite/update-invite.component';
import { AddSponsorComponent } from './modules/sponsor/add-sponsor/add-sponsor.component';
import { DelSponsorComponent } from './modules/sponsor/del-sponsor/del-sponsor.component';
import { UpdateSponsorComponent } from './modules/sponsor/update-sponsor/update-sponsor.component';
import { AddStandComponent } from './modules/stands/add-stand/add-stand.component';
import { DelStandComponent } from './modules/stands/del-stand/del-stand.component';

const routes: Routes = [
   {path:'del-invite',component:DelInviteComponent},
   {path:'add-invite',component:AddInviteComponent},
   {path:'update-invite',component:UpdateInviteComponent},
   {path:'del-sponsor',component:DelSponsorComponent},
   {path:'add-sponsor',component:AddSponsorComponent},
   {path:'update-sponsor',component:UpdateSponsorComponent},
   {path:'del-entrep',component:DelEntrepComponent},
   {path:'add-entrep',component:AddEntrepComponent},
   {path:'update-entrep',component:UpdateEntrepComponent},
   {path:'add-stand',component:AddStandComponent},
   {path:'del-stand',component:DelStandComponent},
   {path:'login',component:LoginComponent},
   {path: 'dashboard', component:DashboardComponent },
   {path :'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
