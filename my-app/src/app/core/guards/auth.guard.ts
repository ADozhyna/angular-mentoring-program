import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthState, isAuthenticated } from 'src/app/login/reducers/auth.reducer';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) {}

  private canAuthenticated(): Observable<any> {
    return this.store
      .pipe(
        select(isAuthenticated),
        take(1),
        tap((isAuthenticated) => {
          if (!isAuthenticated) {
            this.router.navigate(['./login']);
          }
        })
      );
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
