import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuardService } from './services/admin-guard.service';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';


@NgModule({
  declarations: [
    AdminComponent, 
    UserDetailComponent,
    DynamicComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ], 
  entryComponents: [ DynamicComponent ],
  providers:[ AdminGuardService]
})
export class AdminModule { }
