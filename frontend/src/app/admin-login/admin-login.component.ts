import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  adminService = inject(AdminService);
  router = inject(Router);

  onLogin(form: NgForm) {
    if (form.valid) {
      this.adminService.loginAdmin(form.value).subscribe({
        next: (data) => {
          this.router.navigate(['admin-food']);
        },
      });
    }
  }
}
