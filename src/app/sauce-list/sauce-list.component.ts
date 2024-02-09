import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Sauce } from '../types/sauce';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sauce-list',
  templateUrl: './sauce-list.component.html',
  styleUrl: './sauce-list.component.css'
})
export class SauceListComponent implements OnInit {

  sauceList: Sauce[] = [];

  constructor(private apiService: ApiService) {}

  isLoading: boolean = true;

  ngOnInit(): void {

    const dataSauce: Observable<any> = this.apiService.getSauce();
    dataSauce.subscribe((sauce) => {
    this.sauceList = sauce
    this.isLoading = false});

    setTimeout(() => {
      console.log(this.sauceList); 
    }, 1000);
    
  }
}
