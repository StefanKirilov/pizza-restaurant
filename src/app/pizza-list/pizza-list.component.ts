import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pizza } from '../types/pizza';
import { Sauce } from '../types/sauce';
import { Drinks } from '../types/drinks';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})

export class PizzaListComponent implements OnInit {

  pizzaList: Pizza[] = [];
  drinksList: Drinks[] = [];
  sauceList: Sauce[] = [];

  constructor(private apiService: ApiService) {}
  isLoading: boolean = true;
  ngOnInit(): void {   
    this.refreshFood();
  }

  refreshFood() {
    const dataPizza: Observable<any> = this.apiService.getPizza();

    dataPizza.subscribe((pizza) => {
    this.pizzaList = pizza
    this.isLoading = false}); 
  }


}
