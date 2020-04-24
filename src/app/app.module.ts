import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SummaryPipe } from './helpers/pipes/summary.pipe';
import { LimitPipe } from './helpers/pipes/limit.pipe';
import { NgLoopDirective } from './helpers/directives/ng-loop.directive';
import { DropdownDirective } from './helpers/directives/dropdown.directive';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    LimitPipe,
    NgLoopDirective,
    DropdownDirective,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
      FormsModule   
  ],
  exports:[
  ],

  providers: [
    //tokenInterceptor,
    HttpClient
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
