import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  get isLogin(): BehaviorSubject<boolean> {
    return this.authService.isAuthenticated;
  }
  public canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      if (this.isLogin.value || localStorage.getItem('token')) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  public canActivate(): boolean {
    if (this.isLogin.value || localStorage.getItem('currentUserToken')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
