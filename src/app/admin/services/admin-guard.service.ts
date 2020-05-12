import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn() !== true) {
      this.router.navigate(['/login']);
      return false;

    }
    return true;
  }
}

