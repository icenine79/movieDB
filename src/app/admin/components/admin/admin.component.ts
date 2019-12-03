import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver
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

  currentUser: User;
  filteredUsers: any[];
  @ViewChild("usersList", { read: ViewContainerRef, static: false }) container;
  componentRef: ComponentRef<any>;

  constructor(
    private cacheService: CacheService,
    private authService: AuthService,
    private resolver: ComponentFactoryResolver
  ) {
    /* this.currentUser = this.authService.currentUserValue;
    console.log(this.currentUser); */
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
    this.authService.logout();
  }
  filter(query: string) {
    this.filteredUsers = query?
       this.users.filter(user => user.userName.toLowerCase().includes(query.toLowerCase())):
       this.users;
  }
  createComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      DynamicComponent
    );

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.users = this.users;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
