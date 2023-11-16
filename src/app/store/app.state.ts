import { Account, User } from '@interfaces/index';

export interface AppState {
  users: User[];
  accounts: Account[];
  error: boolean;
  loader: boolean;
}
