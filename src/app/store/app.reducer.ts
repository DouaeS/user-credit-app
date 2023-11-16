import { Action, createReducer, on } from '@ngrx/store';
import {
  setUserInfo,
  setAccountInfo,
  setError,
  setLoader,
} from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  users: [],
  accounts: [],
  error: false,
  loader: true,
};

const reducer = createReducer(
  initialState,
  on(setUserInfo, (state, { users }) => ({
    ...state,
    users,
  })),
  on(setAccountInfo, (state, { accounts }) => ({
    ...state,
    accounts,
  })),
  on(setError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(setLoader, (state, { loader }) => ({
    ...state,
    loader,
  }))
);
export function appReducer(state: AppState, action: Action): AppState {
  return reducer(state, action);
}
