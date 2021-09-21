import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (!auth) { this.utils.openSnackBar("Вы не авторизированы!","Ошибка доступа")}
    return this.auth.isAuth();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
