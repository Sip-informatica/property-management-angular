import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '@core/_service/token-storage.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private tokenStorage: TokenStorageService) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Board Admin',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/property-management/board-admin'],
      },
      {
        label: 'Board Management',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/property-management/board-management'],
      },
      {
        label: 'Board User',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/property-management/board-user'],
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
      },
    ];
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.assign('#');
  }
}
