import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError, Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import * as StoreActions from './app.actions';
import { Account, User } from '@interfaces/index';
import { UsersService, AccountsService } from '../services/index';

@Injectable()
export class AppEffects {
  userFetching$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.getUserInfo),
      mergeMap((action) => this.userService.getUsers(action.user)),
      catchError((error) => {
        this.store.dispatch(StoreActions.setError({ error: true }));
        return throwError(error);
      }),
      map((rawData) => {
        if (rawData) {
          return StoreActions.setUserInfo({
            users: rawData as User[],
          });
        } else {
          return StoreActions.setLoader({
            loader: true,
          });
        }
      })
    )
  );
  accountsFetching$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.getUserInfo),
      mergeMap(() => this.accountsService.getAccounts()),
      catchError((error) => {
        this.store.dispatch(StoreActions.setError({ error: true }));
        return throwError(error);
      }),
      map((rawData) => {
        if (rawData) {
          return StoreActions.setAccountInfo({
            accounts: rawData as Account[],
          });
        } else {
          return StoreActions.setLoader({
            loader: true,
          });
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private accountsService: AccountsService,
    private store: Store
  ) {}
}
