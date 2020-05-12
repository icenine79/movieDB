import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId:string;
  authState=null;
  constructor( private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user=>{
      this.userId = user.uid;
     })
   }


   get currentUser(){return this.userId}

   logOut(){
     this.afAuth.auth.signOut();
   }

    isLoggedIn(): boolean {
       const user = JSON.parse(localStorage.getItem('currentUser'));
       return (user !== null) ? true : false;
     }


     registerUser(email:string, password:string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.router.navigate(['/login']);
          console.log(result.user)
        }).catch((error) => {
          window.alert(error.message)
        })
    }

    // Sign in with email/password
    login(email, password) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
           this.router.navigate(['/home']);
        }).catch((error) => {
          window.alert(error.message)
        })
    }

  }


