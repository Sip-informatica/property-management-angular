import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogInComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule
  ]
})
export class LogInModule { }
