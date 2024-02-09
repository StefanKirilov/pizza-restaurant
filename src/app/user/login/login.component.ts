import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../types/user';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public auth: Auth, private userService: UserService, private router:Router) {}

  submitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const value: {email: string , password: string } = form.value;

    console.log(value.email);
    console.log(value.password);

    form.reset();

    this.userService.login(value.email, value.password);
    this.router.navigate(['/menu']);
  }

}
