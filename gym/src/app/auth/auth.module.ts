import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [SignupComponent, LoginComponent, AuthComponent],
  imports: [
    CommonModule,
   
  ],

})
export class AuthModule { }
