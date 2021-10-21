import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/_service/auth.service';
import { finalize, first, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    const { username, email, password } = this.form;

    this.authService.register(username, email, password)
    .pipe(first())
    .pipe(finalize(() => this.loading = false))
    .subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
