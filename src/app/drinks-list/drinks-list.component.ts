import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Drinks } from '../types/drinks';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrl: './drinks-list.component.css'
})
export class DrinksListComponent implements OnInit{
  drinksList: Drinks[] = [];

  constructor(private apiService: ApiService) {}
  isLoading: boolean = true;
  ngOnInit(): void {

    const dataDrinks: Observable<any> = this.apiService.getDrinks();
    dataDrinks.subscribe((drinks) => {
    this.drinksList = drinks
    this.isLoading = false});
 
    setTimeout(() => {
      console.log(this.drinksList); 
    }, 1000);
  }

}
