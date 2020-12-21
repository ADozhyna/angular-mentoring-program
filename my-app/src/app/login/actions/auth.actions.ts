import { Action } from "@ngrx/store";
import { IUser } from "src/app/shared/models/user-entity.model";

export const LOG_IN_ACTION = '[Auth] Log In';
export const LOG_OUT_ACTION = '[Auth] Log Out';
export const LOG_IN_SUCCESS_ACTION = '[Auth] Log In Success';
export const LOG_IN_FAIL_ACTION = '[Auth] Log In Fail';
export const SET_IS_AUTHENTICATED_ACTION = '[Auth] Set Is Authenticated';
export const SET_USER_ACTION = '[Auth] Set User';

export class LogInAction implements Action {
  public readonly type = LOG_IN_ACTION;

  constructor(public payload: { login: string, password: string }) {}
}

export class LogOutAction implements Action {
  public readonly type = LOG_OUT_ACTION;
}

export class LogInSuccessAction implements Action {
  public readonly type = LOG_IN_SUCCESS_ACTION;

  constructor(public payload: string) {}
}

export class SetIsAuthenticatedAction implements Action {
  public readonly type = SET_IS_AUTHENTICATED_ACTION;

  constructor(public payload: boolean) {}
}

export class SetUserAction implements Action {
  public readonly type = SET_USER_ACTION;

  constructor(public payload: IUser) {}
}

export type AuthAction = LogInAction | LogOutAction | LogInSuccessAction | SetIsAuthenticatedAction | SetUserAction;