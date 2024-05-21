import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodComponent } from './food/food.component';
import { BecomepartnerComponent } from './become-partner/become-partner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { AdminFoodComponent } from './admin-food/admin-food.component';
import { UpdateFooditemsComponent } from './update-fooditems/update-fooditems.component';
import { PaymentComponent } from './payment/payment.component';
import { AddFooditemsComponent } from './add-fooditems/add-fooditems.component';
import { SuccessComponent } from './success/success.component';
import { LogoutComponent } from './logout/logout.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'food', component: FoodComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'become-partner', component: BecomepartnerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'admin-food', component: AdminFoodComponent },
  { path: 'add-fooditems', component: AddFooditemsComponent },
  { path: 'update-fooditems', component: UpdateFooditemsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'partner-form', component: PartnerFormComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];
