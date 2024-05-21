import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);

  deleteFromCart(item: any) {
    this.cartService.delete(item);
  }
}
