import { createAction, props } from '@ngrx/store';
import { Account, User } from '@interfaces/index';

export const getUserInfo = createAction(
  '[UserInfo] Get User Info',
  props<{ user: string }>()
);

export const setUserInfo = createAction(
  '[UserInfo] Set User Info',
  props<{ users: User[] }>()
);

export const getAccountInfo = createAction('[AccountInfo] Get Account Info');

export const setAccountInfo = createAction(
  '[AccountInfo] Set Account Info',
  props<{ accounts: Account[] }>()
);

export const setError = createAction(
  '[Error] Get Info Error',
  props<{ error: boolean }>()
);

export const setLoader = createAction(
  '[Loader] Set Loader',
  props<{ loader: boolean }>()
);
