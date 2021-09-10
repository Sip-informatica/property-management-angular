import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/_service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.accountValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
}
