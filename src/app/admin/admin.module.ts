import { CoreModule } from './../core/core.module';
import { ChildComponent } from './../core/components/child/child.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminComponent } from "./components/admin/admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminGuardService } from "./services/admin-guard.service";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { DynamicComponent } from "./components/dynamic/dynamic.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./components/user-detail/modal/modal.component";

@NgModule({
  declarations: [
    AdminComponent,
    UserDetailComponent,
    DynamicComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgbModule,
    CoreModule

  ],
  exports:[
    AdminComponent,
    CoreModule
  ],
  entryComponents: [
    DynamicComponent,
    ModalComponent],
  providers: [AdminGuardService]
})
export class AdminModule {}
