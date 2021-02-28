import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import {AuthService} from '../../service/auth/auth.service';
// @ts-ignore
import {UserToken} from '../../admin_content/users/user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  currentUser: UserToken;

  constructor(private router: Router,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['/login', '/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['/login', '/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
