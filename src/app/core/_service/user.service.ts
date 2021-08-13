import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '@env';
import { User } from '@core/_models/user.model';
import { Router } from '@angular/router';

const httpOptions = {
  responseType: 'text' as const,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) {
      }

  getProducts(): Observable<any> {
    return this.http.get<User[]>(environment.AUTH_API + 'users-admin');
  }

  getPublicContent(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'all', httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(
      environment.API_URL_TEST + 'adminmanager',
      httpOptions
    );
  }

  getManagementBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'manager', httpOptions);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'admin', httpOptions);
  }
}
