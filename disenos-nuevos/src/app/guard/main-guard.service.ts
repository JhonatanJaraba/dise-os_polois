import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import { LoginServiceService } from '../serivces/login-service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuardService {

  constructor(private authService: LoginServiceService, private router: Router,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.validAuth();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.validAuth();
  }

  private validAuth(): boolean {
    const token = this.authService.getToken();
    if (token) {
      this.router.navigateByUrl('/main');
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
