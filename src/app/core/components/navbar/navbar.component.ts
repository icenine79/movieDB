import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  currentUser:User;
  constructor(private auth: AuthService) {
    //this.currentUser=this.auth.currentUserValue
   }
  ngOnInit() {}
    
isLogged(){
 return this.auth.isLoggedIn()
}

  logOut() {
    this.auth.logout();
    this.currentUser=null
  }
}
