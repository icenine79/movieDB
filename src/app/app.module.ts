import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { UserService } from './core/services/user.service';
import { SignupComponent } from './core/components/signup/signup.component';
import { fakeBackendProvider } from './helpers/interceptors/fakebackend';
import { LoginComponent } from './core/components/login/login.component';
import { tokenInterceptor } from './helpers/interceptors/token.interceptor';
import { AuthService } from './shared/services/auth.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { errorInterceptor } from './helpers/interceptors/error.interceptor';
import { SummaryPipe } from './helpers/pipes/summary.pipe';
import { LimitPipe } from './helpers/pipes/limit.pipe';
import { NgLoopDirective } from './helpers/directives/ng-loop.directive';
import { DropdownDirective } from './helpers/directives/dropdown.directive';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { LogChildComponent } from './core/components/login/log-child/log-child.component';
import { DetailComponent } from './core/components/detail/detail.component';
import { UsersListComponent } from './core/components/users-list/users-list.component';
import { RatingModule } from 'ng-starrating';
import {  SafeUrlPipe } from "./helpers/pipes/sanitizer";
import { MoviesService } from './core/services/movies.service';
import { CacheService } from './core/services/cache.service';
import { ParentComponent } from './core/components/parent/parent.component';
import { ChildComponent } from './core/components/child/child.component';
import { LikeComponent } from './core/components/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    SummaryPipe,
    LimitPipe,
    NgLoopDirective,
    DropdownDirective,
    LogChildComponent,
    DetailComponent,
    UsersListComponent,
    SafeUrlPipe,
    ParentComponent,
    ChildComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,

    RatingModule
  ],

  providers: [
    AuthService,
    //tokenInterceptor,
    UserService,
    fakeBackendProvider,
    errorInterceptor,
    MoviesService,
    CacheService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
