import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-update-fooditems',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './update-fooditems.component.html',
  styleUrl: './update-fooditems.component.css',
})
export class UpdateFooditemsComponent {}
