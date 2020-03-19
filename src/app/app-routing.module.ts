import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { ShopOwnerComponent } from './shop-owner/shop-owner.component';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path : 'login',
		component : LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home/:id',
    component: HomePageComponent
  },
  {
    path: '',
    component: SelectRestaurantComponent
  },
  {
    path: 'shop-owner/:id',
    component: ShopOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
