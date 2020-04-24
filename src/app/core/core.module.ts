import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import { SafeUrlPipe } from '../helpers/pipes/sanitizer';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DetailComponent,
    SafeUrlPipe,
  

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
   exports:[
    
  ]
})
export class CoreModule { }
