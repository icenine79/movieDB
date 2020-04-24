import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { UserService } from '../core/services/user.service';
import { fakeBackendProvider } from '../helpers/interceptors/fakebackend';
import { errorInterceptor } from '../helpers/interceptors/error.interceptor';
import { MoviesService } from '../core/services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule
  ], exports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule
  ],
  providers:[
    UserService,
    fakeBackendProvider,
    errorInterceptor,
    MoviesService,
    HttpClientModule,
    AuthService
    
  ]
})
export class SharedModule { }
