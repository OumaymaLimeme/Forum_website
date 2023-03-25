import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutentrepriseComponent } from './dashboard/entreprises/ajoutentreprise/ajoutentreprise.component';
import { ModifierEntrepriseComponent } from './dashboard/entreprises/modifier-entreprise/modifier-entreprise.component';
import { SupprimEntrepriseComponent } from './dashboard/entreprises/supprim-entreprise/supprim-entreprise.component';
import { AjoutInviteComponent } from './dashboard/invites/ajout-invite/ajout-invite.component';
import { ModifierInviteComponent } from './dashboard/invites/modifier-invite/modifier-invite.component';
import { SupprInviteComponent } from './dashboard/invites/suppr-invite/suppr-invite.component';
import { AjoutSponsorComponent } from './dashboard/sponsors/ajout-sponsor/ajout-sponsor.component';
import { ModifierSponsorComponent } from './dashboard/sponsors/modifier-sponsor/modifier-sponsor.component';
import { SupprimSponsorComponent } from './dashboard/sponsors/supprim-sponsor/supprim-sponsor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {  path:'',component:DashboardComponent},
  { path:'add_invite', component: AjoutInviteComponent},
  { path:'del_invite', component: SupprInviteComponent},
  { path:'update_invite', component: ModifierInviteComponent},
  { path:'add_sponsor', component: AjoutSponsorComponent},
  { path:'del_sponsor', component: SupprimSponsorComponent},
  { path:'update_sponsor', component: ModifierSponsorComponent},
  { path:'add_entreprise', component: AjoutentrepriseComponent},
  { path:'del_entreprise', component: SupprimEntrepriseComponent},
  { path:'update_entreprise', component: ModifierEntrepriseComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
