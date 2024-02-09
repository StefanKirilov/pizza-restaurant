import { Component } from '@angular/core';
import { Drinks } from '../types/drinks';
import { User } from 'firebase/auth';
import { Shoping } from '../types/shoping';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-drink',
  templateUrl: './details-drink.component.html',
  styleUrl: './details-drink.component.css'
})
export class DetailsDrinkComponent {
  dataDrinks: Drinks[] = [];
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
    
    const dataDrinks: Observable<any> = this.apiService.getDrinks();

    dataDrinks.subscribe((drink) => {
      this.dataDrinks = drink.filter((x: any) => x.id == this.id);
      this.isLoading = false;    
    }); 
  }

  order() {
    console.log(this.userId);
    
    const dataDrinks: Observable<any> = this.apiService.getDrinks();

    dataDrinks.subscribe((drink) => {
      this.dataDrinks = drink.filter((x: any) => x.id == this.id);
      this.data = {
        user: this.userId,
        id: this.dataDrinks[0].id,
        name: this.dataDrinks[0].name,
        imageUrl: this.dataDrinks[0].imageUrl,
        price: this.dataDrinks[0].price,
        count: this.count,
      };
      console.log(this.data);
      
      if(this.count != 0) {
        this.apiService.addProduct(this.data);
        this.count = 0;
      }
      this.isLoading = false;    
    }); 
    this.router.navigate(['/menu-drinks']);
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
