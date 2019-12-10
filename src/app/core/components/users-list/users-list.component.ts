import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { CacheService } from '../../services/cache.service';
import { User } from 'src/app/shared/models/user';


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

  user:User;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(JSON.stringify(this.user))
  }
  editUser(id: string | number) {
    this.router.navigate(["/edit", id]);
  }
}
