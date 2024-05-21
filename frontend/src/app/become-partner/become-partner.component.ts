// src/app/student-registration/student-registration.component.ts
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { BecamePartnerService } from '../services/became-partner.service';

@Component({
  selector: 'app-become-partner',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FormsModule],
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.css'],
})
export class BecomepartnerComponent {
  BecamePartnerService = inject(BecamePartnerService);
  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.BecamePartnerService.newPartner(form.value).subscribe({
        next: (data) => {
          alert('Successfully received!');
          form.reset();
        },
      });
    }
  }
}
