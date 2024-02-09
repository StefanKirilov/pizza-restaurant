import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { SauceListComponent } from './sauce-list/sauce-list.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ShopingComponent } from './shoping/shoping.component';
import { DetailsDrinkComponent } from './details-drink/details-drink.component';
import { DetailsSauceComponent } from './details-sauce/details-sauce.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PizzaListComponent,
    AboutComponent,
    ContactsComponent,
    DrinksListComponent,
    SauceListComponent,
    DetailsComponent,
    DetailsDrinkComponent,
    DetailsSauceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pizza-app-a94ac","appId":"1:381253466184:web:05fc01a3af1cc6251e407d","storageBucket":"pizza-app-a94ac.appspot.com","apiKey":"AIzaSyBy6MrsnxALyAVDu1uYkwWc1wFUX2gOYv8","authDomain":"pizza-app-a94ac.firebaseapp.com","messagingSenderId":"381253466184","measurementId":"G-X34NN3LJMK"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
