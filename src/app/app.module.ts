import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './property-management/board-admin/board-admin.component';
import { BoardManagementComponent } from './property-management/board-management/board-management.component';
import { BoardUserComponent } from './property-management/board-user/board-user.component';

import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { MenubarComponent } from './shared/component/menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardManagementComponent,
    BoardUserComponent,
    ProfileComponent,
    MenubarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
