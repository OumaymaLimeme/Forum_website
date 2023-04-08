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

const routes: Routes = [
   {path:'add-invite',component:AddInviteComponent},
   {path:'update-invite',component:UpdateInviteComponent},
   {path:'add-sponsor',component:AddSponsorComponent},
   {path:'update-sponsor',component:UpdateSponsorComponent},
   {path:'add-stand',component:AddStandComponent},
   {path:'login',component:LoginComponent},
   {path:'dashboard', component:DashboardComponent },
   {path :'home',component:HomeComponent},
   {path :'',component:HomeComponent},
   {path:'view-entrep',component:ViewEntrepComponent},
  { path: 'add', component: AddEntrepComponent },
  { path: 'update/:id', component: UpdateEntrepComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
