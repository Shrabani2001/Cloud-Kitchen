import { Component, OnInit } from '@angular/core';
import { PartnerComponent } from '../partner/partner.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ChefComponent } from '../chef/chef.component';
import { FactComponent } from '../fact/fact.component';
import { TestmonialComponent } from '../testmonial/testmonial.component';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    HeaderComponent,
    AboutComponent,
    FactComponent,
    ChefComponent,
    TestmonialComponent,
    PartnerComponent,
    FooterComponent,
  ],
})
export class DashboardComponent {
  
}
