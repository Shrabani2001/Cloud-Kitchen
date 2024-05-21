import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constant';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY
    );
  }

  getFoods() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_FOOD
    );
  }

  saveFood(obj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.CREATE_FOOD,
      obj
    );
  }

  updateFood(obj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.UPDATE_FOOD,
      obj
    );
  }

  deleteFood(id: any) {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.DELETE_FOOD + id
    );
  }
}
