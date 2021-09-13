import { Component, OnInit } from '@angular/core';
import { User } from '@core/_models/user.model';
import { UserService } from '@core/_service/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  products: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.products = JSON.parse(err.error).message;
      }
    );
  }
}
