import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Constant} from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginDisabledGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    } else {
      this.router.navigate(['./' + Constant.ROUTES.REDIRECT_TO_MAIN]).then(r => console.log(r));
      return false;
    }
  }

}
