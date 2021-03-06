import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env';

const httpOptions = {
  responseType: 'text' as const,
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
    return this.http.get(environment.API_URL_TEST + 'adminmanager', httpOptions);
  }

  getManagementBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'manager', httpOptions);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.API_URL_TEST + 'admin', httpOptions);
  }
}
