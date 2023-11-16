import { Account, User } from './index';

export interface DataTable {
  user: User['name'];
  credit: Account['credit'];
}
