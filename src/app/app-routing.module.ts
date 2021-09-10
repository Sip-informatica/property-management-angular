import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';


const homeModule = import('./home/home.module').then((module) => module.HomeModule);
const accountModule = import('./account/account.module').then((m) => m.AccountModule);
const propertyManagementModule = import('./property-management/property-management.module').then((m) => m.PropertyManagementModule);

const routes: Routes = [
  { path: '', redirectTo: 'account/login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => homeModule },
  { path: 'profile', component: ProfileComponent },
  { path: 'account', loadChildren: () => accountModule },
  { path: 'property-management', loadChildren: () => propertyManagementModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
