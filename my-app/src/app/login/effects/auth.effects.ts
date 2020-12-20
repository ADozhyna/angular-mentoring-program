import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, pluck, tap, switchMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

import {
  LOG_IN_ACTION,
  LOG_OUT_ACTION,
  LOG_IN_SUCCESS_ACTION,
  LogInSuccessAction,
  SetIsAuthenticatedAction,
  SetUserAction,
} from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  public logIn$: Observable<LogInSuccessAction> = this.actions$.pipe(
    ofType(LOG_IN_ACTION),
    pluck('payload'),
    switchMap(
      ({ login, password }) => this.authService.loginUser(login, password)
        .pipe(
          map(({ token }) => new LogInSuccessAction(token)),
        )
    )
  );

  @Effect()
  public logInSuccess$: Observable<SetIsAuthenticatedAction | SetUserAction> = this.actions$.pipe(
    ofType(LOG_IN_SUCCESS_ACTION),
    pluck('payload'),
    tap((token) => localStorage.accessToken = JSON.stringify(token)),
    switchMap(
      () => this.authService.getUserInfo()
        .pipe(
          switchMap((user) => [
            new SetIsAuthenticatedAction(true),
            new SetUserAction(user)
          ]),
          tap(() => this.router.navigate(['/'])),
          catchError(() => of(
            new SetIsAuthenticatedAction(false),
            new SetUserAction(null)
          ))
        )
    )
  );

  @Effect()
  public logout$: Observable<SetIsAuthenticatedAction | SetUserAction> = this.actions$.pipe(
    ofType(LOG_OUT_ACTION),
    tap(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    }),
    switchMap(() => [
      new SetIsAuthenticatedAction(false),
      new SetUserAction(null)
    ])
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}