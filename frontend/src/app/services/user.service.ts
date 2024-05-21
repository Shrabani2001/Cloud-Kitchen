import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export const BASE_URL = 'http://localhost:1500/kitchen/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  constructor() {}
  newUser(user: any) {
    return this.http.post(BASE_URL + '/create', user);
  }

  loginUser(user: any) {
    return this.http.post(BASE_URL + '/login', user);
  }
}
