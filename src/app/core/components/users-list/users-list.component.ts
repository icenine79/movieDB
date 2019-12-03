import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { CacheService } from '../../services/cache.service';


@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  constructor(
    private cacheService: CacheService,
    private router: Router
  ) {}
  user$;
  storedMovies:any;

  ngOnInit() {
    this.user$ = this.cacheService.getAll();
  }
  editUser(id: string | number) {
    this.router.navigate(["/edit", id]);
  }
}
