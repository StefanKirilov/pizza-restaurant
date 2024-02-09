import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';
import { MinCountDirective } from './min-count.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MaxCountDirective,
    MinCountDirective,
  ],
  imports: [
    CommonModule, UserRoutingModule, FormsModule
  ],
})
export class UserModule { }
