import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partner-form',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './partner-form.component.html',
  styleUrl: './partner-form.component.css'
})
export class PartnerFormComponent {

}
