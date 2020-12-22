import {
  SET_IS_AUTHENTICATED_ACTION,
  SET_USER_ACTION,
  LOG_IN_SUCCESS_ACTION,
  AuthAction
} from '../actions/auth.actions';
import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/user-entity.model';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: IUser;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
};

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case SET_IS_AUTHENTICATED_ACTION: {
      return {
        ...state,
        isAuthenticated: action.payload
      };
    }
  
    case SET_USER_ACTION: {
      return {
        ...state,
        currentUser: action.payload
      };
    }

    case LOG_IN_SUCCESS_ACTION: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

const authStateSelector: MemoizedSelector<object, unknown, DefaultProjectorFn<unknown>> = createFeatureSelector('auth');

export const isAuthenticated: MemoizedSelector<object, unknown, DefaultProjectorFn<unknown>> = createSelector(authStateSelector, (state: AuthState) => state.isAuthenticated);
export const currentUser: MemoizedSelector<object, unknown, DefaultProjectorFn<unknown>> = createSelector(authStateSelector, (state: AuthState) => state.currentUser);
