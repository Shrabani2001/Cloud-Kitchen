import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {}
  addToCart(food: any) {
    this.items.push({ ...food, quantity: 1 });
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => {
      return i.id !== item.id;
    });
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}
