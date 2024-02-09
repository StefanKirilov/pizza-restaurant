import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  checkElement : any;

  constructor(private userService: UserService, private router:Router){}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/menu']);
  }

  shop(): void {
    this.checkElement = document.querySelector('.check');
    if (this.checkElement.checked === true) {
      this.checkElement.checked = false;
    } else {
      this.checkElement.checked = true;
    }
  }

  clear(): void {
    this.checkElement = document.querySelector('.check');
      this.checkElement.checked = false;
  }
}
