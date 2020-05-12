import { MoviesService } from './../../../core/services/movies.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  Output,
  EventEmitter,
  Type
} from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "src/app/shared/models/user";
import { AuthService } from "src/app/shared/services/auth.service";
import { DynamicComponent } from "src/app/admin/components/dynamic/dynamic.component";
import { CacheService } from "src/app/core/services/cache.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  users: User[] = [];
  storedMovies: any;
  currentUser: User;
  filteredUsers: any[];
  @ViewChild("moviesList", { read: ViewContainerRef, static: false }) container;
  // Keep track of list of generated components for removal purposes
  components = [];

  // Expose class so that it can be used in the template
  componentRef: ComponentRef<any>;

  constructor(
    private cacheService: CacheService,
    private authService: AuthService,
    private resolver: ComponentFactoryResolver,
    private movieService: MoviesService
  ) {

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.subscription = this.cacheService.getAll().subscribe(
      data => {
        this.filteredUsers = this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  logout() {
    this.authService.logout()
  }
  filter(query: string) {
    this.filteredUsers = query ?
      this.users.filter(user => user.userName.toLowerCase().includes(query.toLowerCase())) :
      this.users;
  }
  createComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      DynamicComponent
    );

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.storedMovies = this.storedMovies;
  }


ngOnDestroy() {
  this.subscription.unsubscribe();
  if (this.componentRef) {
    this.componentRef.destroy();
  }
}
}
