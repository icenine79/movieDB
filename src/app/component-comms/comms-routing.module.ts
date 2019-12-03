import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingComponent } from './components/sibling/sibling.component';


const commsRoutes: Routes = [
  
  {path:'parent', component:ParentComponent},
  {path:'sibling', component:SiblingComponent}

];


@NgModule({
  imports: [RouterModule.forChild(commsRoutes)],
  exports: [RouterModule]
})
export class CommsRoutingModule { }
