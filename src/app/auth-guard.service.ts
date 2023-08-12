import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService
      .isAuthenticated()
      .then((authenticated: any | UrlTree) => {
        if (typeof authenticated === 'boolean') {
          if (authenticated) {
            return true;
          } else {
            return this.router.createUrlTree(['/']); // Use createUrlTree to return a UrlTree
          }
        } else {
          return authenticated; // Return UrlTree as is
        }
      }) as Promise<boolean | UrlTree>;
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(route, state); // Use the same return type as canActivate
  }
}
