import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { AddInviteComponent } from './modules/invite/add-invite/add-invite.component';
import { DelInviteComponent } from './modules/invite/del-invite/del-invite.component';
import { UpdateInviteComponent } from './modules/invite/update-invite/update-invite.component';
import { UpdateSponsorComponent } from './modules/sponsor/update-sponsor/update-sponsor.component';
import { AddSponsorComponent } from './modules/sponsor/add-sponsor/add-sponsor.component';
import { DelSponsorComponent } from './modules/sponsor/del-sponsor/del-sponsor.component';
import { DelEntrepComponent } from './modules/entreprise/del-entrep/del-entrep.component';
import { AddEntrepComponent } from './modules/entreprise/add-entrep/add-entrep.component';
import { UpdateEntrepComponent } from './modules/entreprise/update-entrep/update-entrep.component';
import { AddStandComponent } from './modules/stands/add-stand/add-stand.component';
import { DelStandComponent } from './modules/stands/del-stand/del-stand.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ShortcutMenuComponent,
    NavigationComponent,
    AddInviteComponent,
    DelInviteComponent,
    UpdateInviteComponent,
    UpdateSponsorComponent,
    AddSponsorComponent,
    DelSponsorComponent,
    DelEntrepComponent,
    AddEntrepComponent,
    UpdateEntrepComponent,
    AddStandComponent,
    DelStandComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
