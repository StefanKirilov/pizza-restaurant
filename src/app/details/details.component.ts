import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Pizza } from '../types/pizza';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { Shoping } from '../types/shoping';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  dataPizza: Pizza[] = [];
  id: string;
  isLoading: boolean = true;
  isLiked: boolean = false;
  USER_KEY = '[user]';
  user: User | any;
  favorite: string[] | any;
  userId: string | any;
  dataId: string | undefined;
  isLike: boolean = false;
  count: number = 0;
  data: Shoping | undefined;

  constructor(private activeRoute: ActivatedRoute, private apiService: ApiService, private router: Router){
    this.id = this.activeRoute.snapshot.params['id'];

    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';

      if (lsUser !== ''){
        this.user = JSON.parse(lsUser);     
      } 
          this.userId = this.user?.uid;
          
 
    } catch (error: any) {
      alert(error.message);
    }
    
  }
  ngOnInit(): void {
    
    const dataPizza: Observable<any> = this.apiService.getSinglePizza();

    dataPizza.subscribe((pizza) => {
      this.dataPizza = pizza.filter((x: any) => x.id == this.id);

      this.favorite = this.dataPizza[0].favorite;
      if(this.favorite.length > 0){
        this.isLike = this.favorite[0]?.split(',').some((x: any) => x == this.userId);
        if (this.isLike){
          this.isLiked = true;
        }
      }
      this.isLoading = false;    
    }); 
  }


  like() {
      this.favorite?.push(this.userId);
      this.apiService.updateFavorites(this.id, this.favorite);

      this.isLiked = true; 
  }

 notLike() {
  let newUserLike = []; 

  newUserLike = this?.favorite[0].split(',').filter((x: any) => x != this.userId);

  this.apiService.updateFavorites(this.id, newUserLike);
  this.isLiked = false; 
  }

  order() {
    
    const dataPizza: Observable<any> = this.apiService.getSinglePizza();

    dataPizza.subscribe((pizza) => {
      this.dataPizza = pizza.filter((x: any) => x.id == this.id);
    console.log(this.dataPizza)
    this.data = {
      user: this.userId,
      id: this.dataPizza[0].id,
      name: this.dataPizza[0].name,
      imageUrl: this.dataPizza[0].imageUrl,
      price: this.dataPizza[0].price,
      count: this.count,
    };
    if(this.count != 0) {
      this.apiService.addProduct(this.data);
      this.count = 0;
    }
  }); 
  this.router.navigate(['/menu-pizza']);
  }

  minus() {
    this.count--; 
    if (this.count < 0){
      this.count = 0;
    }
  }

  plus() {
    this.count++; 
  }
}
