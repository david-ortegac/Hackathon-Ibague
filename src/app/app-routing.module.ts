import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssingEmergencyComponent } from './components/assing-emergency/assing-emergency.component';
import { EmergenciesComponent } from './components/emergencies/emergencies.component';
import { IotComponent } from './components/iot/iot.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SearchEmergencyComponent } from './components/search-emergency/search-emergency.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'emergencies', component: EmergenciesComponent,
  },
  {
    path: 'emergencies-asigned', component: AssingEmergencyComponent
  },
  {
    path: 'iot', component: IotComponent
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
