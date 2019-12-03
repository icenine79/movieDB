import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const adminRoutes: Routes = [
  
  {path:'admin', component:AdminComponent, canActivate: [AdminGuardService]},
  {path:'detail/:id', component: UserDetailComponent},

];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
