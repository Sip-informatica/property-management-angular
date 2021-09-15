import { Component, OnInit } from '@angular/core';
import { User } from '@core/_models/user.model';
import { UserService } from '@core/_service/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  products: User[] = [];
  product!: User;
  selectedProducts: User[] = [];
  submitted!: boolean;
  productDialog!: boolean;
  loading: boolean = true;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.loading = false;
      },
      (err) => {
        this.products = JSON.parse(err.error).message;
      }
    );
  }
  openNew(): void {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  deleteSelectedProducts(): void {}

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }
  getEventValue($event: any): string {
    return $event.target.value;
  }
}
