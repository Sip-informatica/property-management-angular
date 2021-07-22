import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
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
export class AccountModule { }
