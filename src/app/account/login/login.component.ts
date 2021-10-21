import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/_service/auth.service';
import { TokenStorageService } from '@core/_service/token-storage.service';
import { finalize, first, timeout } from 'rxjs/operators';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading = false;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.loading = true;
    const { username, password } = this.form;

    this.authService
      .login(username, password)
      .pipe(first())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }
  reloadPage(): void {
    window.location.assign('#');
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.reloadPage();
  }
}
