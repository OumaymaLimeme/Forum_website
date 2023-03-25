import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AjoutentrepriseComponent } from './dashboard/entreprises/ajoutentreprise/ajoutentreprise.component';
import { SupprimEntrepriseComponent } from './dashboard/entreprises/supprim-entreprise/supprim-entreprise.component';
import { ModifierEntrepriseComponent } from './dashboard/entreprises/modifier-entreprise/modifier-entreprise.component';
import { ModifierSponsorComponent } from './dashboard/sponsors/modifier-sponsor/modifier-sponsor.component';
import { SupprimSponsorComponent } from './dashboard/sponsors/supprim-sponsor/supprim-sponsor.component';
import { AjoutSponsorComponent } from './dashboard/sponsors/ajout-sponsor/ajout-sponsor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AjoutentrepriseComponent,
    SupprimEntrepriseComponent,
    ModifierEntrepriseComponent,
    ModifierSponsorComponent,
    SupprimSponsorComponent,
    AjoutSponsorComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
