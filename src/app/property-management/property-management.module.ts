import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './property-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagementComponent } from './board-management/board-management.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { PropertyManagementComponent } from './property-management.component';



@NgModule({
  declarations: [
    PropertyManagementComponent,
    BoardAdminComponent,
    BoardManagementComponent,
    BoardUserComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class PropertyManagementModule { }
