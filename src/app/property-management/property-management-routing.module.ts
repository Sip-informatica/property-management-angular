import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyManagementComponent } from './property-management.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagementComponent } from './board-management/board-management.component';
import { BoardUserComponent } from './board-user/board-user.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyManagementComponent,
    children: [
      { path: 'board-admin', component: BoardAdminComponent },
      { path: 'board-management', component: BoardManagementComponent },
      { path: 'board-user', component: BoardUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
