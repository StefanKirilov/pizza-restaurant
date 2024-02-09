import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { ApiService } from '../../api.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Pizza } from '../../types/pizza';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  comment: string = '';
  element: object = {};
  commentLength: number = 0;
  json: any;
  user: User | any;
  USER_KEY = '[user]';
  userId: string | any;
  dataPizza: Pizza[] = [];
  likePizza: Pizza[] = [];
  favorite: string[] | any;

  constructor(private apiService: ApiService, private userService: UserService){
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
  isLoading: boolean = true;
  isUser: boolean = true;

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }


ngOnInit(): void {

  const dataPizza: Observable<any> = this.apiService.getPizza();

  dataPizza.subscribe((pizza) => {

    this.dataPizza = pizza;
    setTimeout(() => {
      this.likePizza = this.dataPizza.filter((x: Pizza) => x.favorite[0]?.split(',').some((u: string) => u === this.userId)); 
    },10)

    this.isLoading = false;    
  }); 

}

}
