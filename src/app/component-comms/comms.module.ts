import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { SharedModule } from '../shared/shared.module';
import { CommsRoutingModule } from './comms-routing.module';
import { SharedService } from './services/shared.service';
import { UserService } from '../core/services/user.service';



@NgModule({
  declarations: [
    ParentComponent, 
    ChildComponent, 
    SiblingComponent
  ],
  imports: [
    CommonModule,
    CommsRoutingModule,
    SharedModule
  ],
  providers:[SharedService, UserService]
})
export class ComponentCommsModule { }
