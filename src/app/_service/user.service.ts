import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env';

const httpOptions = {
  headers: new HttpHeaders({ 'responseType': 'text' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'all',  httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'user', httpOptions);
  }

  getManagementBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'mag', httpOptions);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'admin', httpOptions);
  }
}
