import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';


import { CardModule, } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';

import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
     exports: [
      MenubarModule,
      InputTextModule,
      ButtonModule,
      CardModule,
      AvatarModule,
      PasswordModule,
      DividerModule,
      MessagesModule,
      MessageModule,
      ToastModule,
      CalendarModule,
      SliderModule,
      DialogModule,
      MultiSelectModule,
      ContextMenuModule,
      DropdownModule,
      ProgressBarModule,
      FileUploadModule,
      ToolbarModule,
      RatingModule,
      RadioButtonModule,
      InputNumberModule,
      ConfirmDialogModule,
      InputTextareaModule,
      TableModule,
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimengModule { }
