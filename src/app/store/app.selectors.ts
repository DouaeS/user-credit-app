import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const getUsers = createSelector(
  selectAppState,
  (state: AppState) => state.users
);

export const getAccounts = createSelector(
  selectAppState,
  (state: AppState) => state.accounts
);

export const getError = createSelector(selectAppState, (state) => state.error);

export const getLoader = createSelector(
  selectAppState,
  (state) => state.loader
);
