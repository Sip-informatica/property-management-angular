import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenubarComponent } from './component/menubar/menubar.component';

const routes: Routes = [
  { path: 'menubar', component: MenubarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengRoutingModule { }
