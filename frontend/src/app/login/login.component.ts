import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.newUser(form.value).subscribe({
        next: (data) => {
          alert('Successful login!');
        },
      });
    }
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.userService.loginUser(form.value).subscribe({
        next: (data) => {
          this.router.navigate(['food']);
        },
      });
    }
  }
}
