import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '@core/_models/role.enum';
import { User } from '@core/_models/user.model';
import { UserClass } from '@core/_models/userClass.model';
import { UserService } from '@core/_service/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  loading = true;
  ecaption = 'Gestión de usuarios';

  products: User[] = [];
  product!: User;
  selectedProducts: User[] = [];
  cols: any[] = [];
  columnsToDisplay: string[] = [];
  private _selectedColumns: any[] = [];

  userDialog!: UserClass;
  submitted!: boolean;
  productDialog!: boolean;
  roles: Role[] = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.loading = false;
        this.updateColumns();
        this._selectedColumns = this.cols;
        this.roles = [
          Role.Admin,
          Role.Manager,
          Role.Operator,
          Role.Customer,
          Role.Authenticated,
        ];
      },
      (mistake) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Error: ' +
            mistake.error.errors +
            ' - ' +
            mistake.error.message,
          life: 4000,
        });
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
    this.userDialog = new UserClass();
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts(): void {}
  saveProduct(): void {
    this.submitted = true;
    if (
      this.userDialog.username &&
      this.userDialog.email &&
      this.userDialog.phone &&
      this.userDialog.password &&
      this.userDialog.dni
    ) {
      this.userService
        .createProduct(this.userDialog)
        .pipe(first())
        .subscribe(
          (data) => {
            console.log(data);
            this.messageService.add({
              severity: 'success',
              summary: 'Exitoso',
              detail: 'Usuario Creado - ' + data.message,
              life: 4000,
            });
            this.ngOnInit();
          },
          (mistake) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail:
                'Usuario no Creado - ' +
                mistake.error.errors +
                ' - ' +
                mistake.error.message,
              life: 4000,
            });
          }
        );
      this.productDialog = false;
      this.userDialog = new UserClass();
    }
  }

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
