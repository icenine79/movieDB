import { Injectable } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    

    if (this.authService.isLoggedIn()!==true) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
      
    } 
    return true;
  }
}
