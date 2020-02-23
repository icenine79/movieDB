import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from './core/services/user.service';
import { fakeBackendProvider } from './helpers/interceptors/fakebackend';
import { tokenInterceptor } from './helpers/interceptors/token.interceptor';
import { AuthService } from './shared/services/auth.service';
import { errorInterceptor } from './helpers/interceptors/error.interceptor';
import { SummaryPipe } from './helpers/pipes/summary.pipe';
import { LimitPipe } from './helpers/pipes/limit.pipe';
import { NgLoopDirective } from './helpers/directives/ng-loop.directive';
import { DropdownDirective } from './helpers/directives/dropdown.directive';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MoviesService } from './core/services/movies.service';
import { CacheService } from './core/services/cache.service';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    LimitPipe,
    NgLoopDirective,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  exports:[
  ],

  providers: [
    AuthService,
    //tokenInterceptor,
    UserService,
    fakeBackendProvider,
    errorInterceptor,
    MoviesService,
    CacheService,
    AngularFireDatabase
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
