import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /*  get token() {
     const token = this.currentUserSubject.value.token;
    if (!token) return null;
    return this.helper.decodeToken(token); 
  }  */
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return (user !== null) ? true : false;
  }
  login(credentials: any) {
    return this.http.post('/users/authenticate', credentials)
      .pipe(map(user => {
        if (user)
          localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }))
  }
 
    /* isLoggedIn() {
    const token = this.currentUserSubject.value.token;
    return this.helper.isTokenExpired(token);
  }   */


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    
    this.router.navigate(['/login'])
  }
}
