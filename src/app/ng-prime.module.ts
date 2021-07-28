import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';


import { CardModule, } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    PasswordModule,
    DividerModule,
    MessagesModule,
    MessageModule,
  ]
})

export class NgPrimeModule { }
