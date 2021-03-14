import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './property-management/board-admin/board-admin.component';
import { BoardManagementComponent } from './property-management/board-management/board-management.component';
import { BoardUserComponent } from './property-management/board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
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
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    MenubarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
