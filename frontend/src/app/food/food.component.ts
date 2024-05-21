import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food',
  standalone: true,
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
  imports: [HeaderComponent, RouterLink],
})
export class FoodComponent implements OnInit {
  ngOnInit(): void {}
  cartService = inject(CartService);
  router = inject(Router);

  foods: any[] = [
    {
      img: '../../assets/pizza.jpg',
      name: 'Pizza',
      price: 130,
      description: 'Fresh and Hot',
      id: 1,
    },
    {
      img: '../../assets/panipuri.webp',
      name: 'Panipuri',
      price: 50,
      description: 'Fresh and Delicious',
      id: 2,
    },
    {
      img: '../../assets/chickenCurry.jpg',
      name: 'Chicken Curry',
      price: 150,
      description: 'Flavorful and Hot',
      id: 3,
    },
    {
      img: '../../assets/mitha.png',
      name: 'sweet',
      price: 80,
      description: 'Delicious and Hot',
      id: 4,
    },
    {
      img: '../../assets/Rasagolla.jpeg',
      name: 'Food 5',
      price: 80,
      description: 'Fresh and Delicious',
      id: 5,
    },
    {
      img: '../../assets/sweetfood.png',
      name: 'sweet',
      price: 50,
      description: 'Yummy and Hot',
      id: 6,
    },
    {
      img: '../../assets/Kerala-Fish-Curry.jpg',
      name: 'Fish Masala',
      price: 140,
      description: 'Hot and tasty',
      id: 7,
    },
    {
      img: '../../assets/paneer.jpeg',
      name: 'paneer curry',
      price: 180,
      description: 'Fresh and hot',
      id: 8,
    },
    {
      img: '../../assets/pizza.jpg',
      name: 'Veg pizza',
      price: 150,
      description: 'Palatable and Hot',
      id: 9,
    },
    {
      img: '../../assets/pizza.jpg',
      name: 'pizza',
      price: 50,
      description: 'Fresh and Hot',
      id: 10,
    },
  ];

  addToCart(food: any) {
    this.cartService.addToCart(food);
    this.router.navigate(['/cart']);
  }
}
