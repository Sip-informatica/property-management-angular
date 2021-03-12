import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';
import { MenubarComponent } from './component/menubar/menubar.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    PrimengRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }
