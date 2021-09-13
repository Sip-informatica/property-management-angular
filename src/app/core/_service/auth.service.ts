import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {environment} from '@env';
import { User } from '@core/_models/user.model';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accountSubject: BehaviorSubject<User>;
  public account: Observable<User>;
  user!: User;

  constructor(private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<User>(this.user);
    this.account = this.accountSubject.asObservable();
   }

  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);

  }

  register(username: string, email: string, password: string): Observable<any>{
    return this.http.post(environment.AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  public get accountValue(): User {
    return this.accountSubject.value;
  }
}
