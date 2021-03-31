import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    LogInComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    MessagesModule,
    MessageModule,
  ]
})
export class LogInModule { }
