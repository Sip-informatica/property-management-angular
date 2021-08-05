import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardAdminComponent } from './board-admin.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [BoardAdminComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BoaradminModule { }
