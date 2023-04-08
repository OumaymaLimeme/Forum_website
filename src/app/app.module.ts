import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { AddInviteComponent } from './modules/invite/add-invite/add-invite.component';
import { UpdateInviteComponent } from './modules/invite/update-invite/update-invite.component';
import { UpdateSponsorComponent } from './modules/sponsor/update-sponsor/update-sponsor.component';
import { AddSponsorComponent } from './modules/sponsor/add-sponsor/add-sponsor.component';
import { AddEntrepComponent } from './modules/entreprise/add-entrep/add-entrep.component';
import { UpdateEntrepComponent } from './modules/entreprise/update-entrep/update-entrep.component';
import { AddStandComponent } from './modules/stands/add-stand/add-stand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ViewEntrepComponent } from './modules/entreprise/view-entrep/view-entrep.component';
import { ViewInviteComponent } from './modules/invite/view-invite/view-invite.component';
import { ViewSponsorComponent } from './modules/sponsor/view-sponsor/view-sponsor.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ShortcutMenuComponent,
    NavigationComponent,
    AddInviteComponent,
    UpdateInviteComponent,
    UpdateSponsorComponent,
    AddSponsorComponent,
    AddEntrepComponent,
    UpdateEntrepComponent,
    AddStandComponent,
    DashboardComponent,
    HomeComponent,
    ViewEntrepComponent,
    ViewInviteComponent,
    ViewSponsorComponent
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
