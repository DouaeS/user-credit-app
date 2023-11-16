import { Injectable } from '@angular/core';
import { Account } from '@interfaces/index';
import { Observable, of } from 'rxjs';

@Injectable()
export class AccountsService {
  getAccounts(): Observable<Account[]> {
    return of(accounts);
  }
}

const accounts: Account[] = [
  { id: 1, credit: 50 },
  { id: 2, credit: 40 },
  { id: 3, credit: 5 },
  { id: 4, credit: 20 },
  { id: 5, credit: 25 },
  { id: 6, credit: 35 },
  { id: 7, credit: 80 },
  { id: 8, credit: 9 },
];
