import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './property-management/board-admin/board-admin.component';
import { BoardManagementComponent } from './property-management/board-management/board-management.component';
import { BoardUserComponent } from './property-management/board-user/board-user.component';
import { MenubarComponent } from './shared/component/menubar/menubar.component';

const routes: Routes = [
  { path: 'home',  loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
  { path: 'menubar', component: MenubarComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'management', component: BoardManagementComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
