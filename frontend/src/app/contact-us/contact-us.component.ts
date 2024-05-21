import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
  imports: [HeaderComponent, RouterLink, FormsModule],
})
export class ContactUsComponent {
  email1: string = 'biswajitmohaptra2002@gmail.com';
  email2: string = 'shrabaninayak18@gmail.com';
  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  }
}
