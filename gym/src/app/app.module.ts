import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { WelcomeComponent } from './welcome/welcome.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule  } from "@angular/material/input";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from "./auth/login/login.component";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule  } from "@angular/material/checkbox";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatToolbarModule  } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { TrainingModule } from './training/training.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
MatToolbarModule,
MatListModule,
MatTabsModule,
TrainingModule



  
  ],

  // exports:[

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







