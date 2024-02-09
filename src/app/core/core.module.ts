import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ShopingModule } from '../shoping/shoping.module';
import { ShopingComponent } from '../shoping/shoping.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopingModule,
  ],
  exports: [HeaderComponent,
    FooterComponent ],
})
export class CoreModule { }
