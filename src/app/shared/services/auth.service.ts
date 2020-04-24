import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<User>
  currentUser: Observable<User>

  constructor(private router: Router, private http: HttpClient) {
/*     this.currentUser = this.currentUserSubject.asObservable();
 */  }

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

  


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    this.router.navigate(['/login'])
  }
}