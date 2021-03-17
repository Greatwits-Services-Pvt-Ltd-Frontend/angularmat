import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent  } from "./welcome/welcome.component";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TrainingComponent } from "./training/training.component";
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';

const routes: Routes = [
  {
    component:WelcomeComponent,
    path:"welcome"
  },
  {
    component:AuthComponent,
    path:"auth"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:SignupComponent,
    path:"signup"
  },
  {
    component:TrainingComponent,
    path:"training"
  },
  {
    component:NewTrainingComponent,
    path:"new-training"
  },
  {
    component:CurrentTrainingComponent,
    path:"current-training"
  },
  {
    component:PastTrainingComponent,
    path:"past-training"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
