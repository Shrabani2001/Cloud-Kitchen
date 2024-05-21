import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fooditems',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './add-fooditems.component.html',
  styleUrl: './add-fooditems.component.css',
})
export class AddFooditemsComponent {
  // items: any[] = []; // Assuming items is an array of food items
  // checkoutForm: FormGroup;
  // constructor(
  //   private adminService: AdminService,
  //   private formBuilder: FormBuilder
  // ) {
  //   this.checkoutForm = this.formBuilder.group({
  //     foodname: '',
  //     price: '',
  //     description: '',
  //   });
  // }
  // onSubmit(): void {
  //   const formData = this.checkoutForm.value;
  //   this.adminService.addFoodItem(formData).subscribe(
  //     (response) => {
  //       console.log('Food added successfully:', response);
  //       // Assuming the response contains the updated list of items
  //       this.items = response.foodItems;
  //       console.warn('Your order has been submitted', formData);
  //       this.checkoutForm.reset();
  //     },
  //     (error) => {
  //       console.error('Error adding food:', error);
  //       // Handle error response
  //     }
  //   );
  // }
}
