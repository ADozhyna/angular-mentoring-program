import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private canAuthenticated(): Observable<boolean> {
    return this.isLogin
    .pipe(
      take(1),
      tap(value => {
        if (!value) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

  get isLogin(): Observable<boolean> {
    return this.authService.isAuthenticated.asObservable();
  }
  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
      return this.canAuthenticated();
  }
  public canActivate(): Observable<boolean> {
    return this.canAuthenticated();
  }
}
