import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ClubsComponent} from './clubs/clubs.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {AjoutEventComponent} from './ajout-event/ajout-event.component';
import {DemandesComponent} from './demandes/demandes.component';
import {AccueilComponent} from './accueil/accueil.component';

export const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: '', component: AccueilComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'ajout-event', component: AjoutEventComponent },
  { path: 'demandes', component: DemandesComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
