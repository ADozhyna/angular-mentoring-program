import { Action } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/user-entity.model';

export const LOG_IN_ACTION: string = '[Auth] Log In';
export const LOG_OUT_ACTION: string = '[Auth] Log Out';
export const LOG_IN_SUCCESS_ACTION: string = '[Auth] Log In Success';
export const LOG_IN_FAIL_ACTION: string = '[Auth] Log In Fail';
export const SET_IS_AUTHENTICATED_ACTION: string = '[Auth] Set Is Authenticated';
export const SET_USER_ACTION: string = '[Auth] Set User';

export class LogInAction implements Action {
  public readonly type: string = LOG_IN_ACTION;

  constructor(public payload: { login: string, password: string }) {}
}

export class LogOutAction implements Action {
  public readonly type: string = LOG_OUT_ACTION;
}

export class LogInSuccessAction implements Action {
  public readonly type: string = LOG_IN_SUCCESS_ACTION;

  constructor(public payload: string) {}
}

export class SetIsAuthenticatedAction implements Action {
  public readonly type: string = SET_IS_AUTHENTICATED_ACTION;

  constructor(public payload: boolean) {}
}

export class SetUserAction implements Action {
  public readonly type: string = SET_USER_ACTION;

  constructor(public payload: IUser) {}
}

export type AuthAction = LogInAction | LogOutAction | LogInSuccessAction | SetIsAuthenticatedAction | SetUserAction;
