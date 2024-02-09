import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { SauceListComponent } from './sauce-list/sauce-list.component';
import { DetailsComponent } from './details/details.component';
import { ShopingComponent } from './shoping/shoping.component';
import { DetailsDrinkComponent } from './details-drink/details-drink.component';
import { DetailsSauceComponent } from './details-sauce/details-sauce.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu',
  },
  {
    path: 'menu',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'shoping',
  //   component: ShopingComponent
  // },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'menu-pizza',
    component: PizzaListComponent
  },
  {
    path: 'menu-drinks',
    component: DrinksListComponent
  },
  {
    path: 'menu-sauce',
    component: SauceListComponent
  },
  {
    path: 'menu-pizza/:id',
    component: DetailsComponent
  },
  {
    path: 'menu-drinks/:id',
    component: DetailsDrinkComponent
  },
  {
    path: 'menu-sauce/:id',
    component: DetailsSauceComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
