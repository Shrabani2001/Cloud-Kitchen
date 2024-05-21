import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent, RouterLink,FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  router = inject(Router);
  OnSuccess(paymentForm:NgForm) {
    if (paymentForm.valid) {
    this.router.navigate(['/success']);
    }
  }
}
