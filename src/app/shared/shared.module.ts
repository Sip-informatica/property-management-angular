import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';


@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule

  ],
  exports: [
    PrimengModule,
    MenubarComponent
  ]
})
export class SharedModule { }
