import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public auth: Auth, private userService: UserService, private router:Router) { }


  submitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const value: {email: string , name: string, password: string, rePassword: string } = form.value;


    if (value.password != value.rePassword){
      throw Error(`Password and rePassword is not the same!`);
    }

    form.reset();

    this.userService.register(value.email,value.name, value.password);
    this.router.navigate(['/menu']);
 }
}
