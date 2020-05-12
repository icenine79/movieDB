import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject:BehaviorSubject<User>
  currentUser: Observable<User>
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));   
     this.currentUser= this.currentUserSubject.asObservable(); 
  }


  logout(){
    localStorage.removeItem('currentUser')
    console.log('loggedout')
  }

    isLoggedIn(): boolean {
       const user = JSON.parse(localStorage.getItem('currentUser'));
       return (user !== null) ? true : false;
     }

     public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }

     registeruser(credentials:any){
      console.log(credentials)
      return this.http.post<any>('/users/register', credentials);
    }
    
    login(credentials){
      console.log(credentials)
      return this.http.post<any>('/users/authenticate', credentials)
      .pipe(map(user => {
        if (user)
          localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }))
    }

  }


