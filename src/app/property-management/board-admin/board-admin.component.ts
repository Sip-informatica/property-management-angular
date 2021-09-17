import { Component, Input, OnInit } from '@angular/core';
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
  loading = true;
  ecaption = 'Gestión de usuarios';

  cols: any[] = [];
  columnsToDisplay: string[] = [];
  private _selectedColumns: any[] = [];

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
        this.updateColumns();
        this._selectedColumns = this.cols;
      },
      (err) => {
        this.products = JSON.parse(err.error).message;
      }
    );
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
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
  updateColumns(): void {
    this.cols = Object.keys(this.products[0]).map((key) => ({
      field: key,
      header: key,
    }));
    this.columnsToDisplay = this.cols.map((col) => col.field);
  }
}
