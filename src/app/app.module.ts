import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { AjoutEventComponent } from './ajout-event/ajout-event.component';
import { DemandesComponent } from './demandes/demandes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Nav2Component } from './nav2/nav2.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    ClubsComponent,
    AboutComponent,
    EventsComponent,
    AjoutEventComponent,
    DemandesComponent,
    AccueilComponent,
    Nav2Component,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
