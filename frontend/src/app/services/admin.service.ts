import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export const BASE_URL = 'http://localhost:1500/kitchen/admin';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  http = inject(HttpClient);

  constructor() {}
  loginAdmin(admin: any) {
    return this.http.post(BASE_URL + '/login', admin);
  }

  addFoodItem(data: any) {
    return this.http.post(BASE_URL + '/addfooditem', data);
  }

  updateFoodItem(foodItemId: number, data: any) {
    return this.http.put(BASE_URL + `/updatefooditem/${foodItemId}`, data);
  }

  deleteFoodItem(foodItemId: number) {
    return this.http.delete(`${BASE_URL}/delete/${foodItemId}`);
  }
}
