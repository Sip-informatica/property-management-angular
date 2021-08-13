import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardAdminComponent } from './board-admin.component';
import { SharedModule } from 'app/shared/shared.module';
import { BoardAdminRoutingModule } from './board-admin-routing.module';


@NgModule({
  declarations: [BoardAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    BoardAdminRoutingModule
  ]
})
export class BoaradminModule { }
