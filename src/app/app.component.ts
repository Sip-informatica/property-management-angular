import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '@core/token-storage.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'property-management-angular';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagementBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showManagementBoard = this.roles.includes('ROLE_MANAGEMENT');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
