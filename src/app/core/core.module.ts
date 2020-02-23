import { ReviewsComponent } from './components/reviews/reviews.component';
import { ChildComponent } from './components/child/child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LogChildComponent } from './components/login/log-child/log-child.component';
import { DetailComponent } from './components/detail/detail.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LikeComponent } from './components/like/like.component';
import { ParentComponent } from './components/parent/parent.component';
import { SafeUrlPipe } from '../helpers/pipes/sanitizer';



@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ChildComponent,
    LogChildComponent,
    DetailComponent,
    UsersListComponent,
    LikeComponent,
    ParentComponent,
    SafeUrlPipe,
    ReviewsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
   exports:[
    NavbarComponent,
    ChildComponent
  ]
})
export class CoreModule { }
