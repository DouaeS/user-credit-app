import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Account, User, DataTable } from '@interfaces/index';
import { getAccountInfo, getUserInfo, setLoader } from './store/app.actions';
import * as selectors from './store/app.selectors';
import { ThemeService } from './services/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  icon = 'assets/icons/sun.svg';
  data: DataTable[] = [];

  spinner$ = this.store.select(selectors.getLoader);
  users$ = this.store.select(selectors.getUsers);
  accounts$ = this.store.select(selectors.getAccounts);
  showErrorPage$ = this.store.select(selectors.getError);

  tableDataSelector$ = combineLatest([
    this.users$,
    this.accounts$,
    this.spinner$,
  ]).pipe(
    tap(([users, accounts, spinner]: [User[], Account[], boolean]) => {
      //spinner is set to false only if we have data sent from the services, if there is no data sent it will loop indefinetly
      if (users?.length && accounts?.length && spinner) {
        this.store.dispatch(setLoader({ loader: false }));
      }
      this.cooncatById(users, accounts);
    })
  );

  constructor(private store: Store, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.store.dispatch(getUserInfo({ user: '' }));
    this.store.dispatch(getAccountInfo());
  }

  receiveToggledTheme($event: boolean): void {
    this.themeService.toggleTheme();
    $event
      ? (this.icon = 'assets/icons/moon.svg')
      : (this.icon = 'assets/icons/sun.svg');
  }

  receiveInputData($event: string): void {
    this.store.dispatch(getUserInfo({ user: $event }));
  }

  cooncatById(userData: User[], creditsData: Account[]): void {
    const tableData: DataTable[] = [];
    userData.map((userItem: User) => {
      const creditItem = creditsData.find(
        (credit: Account) => credit.id === userItem.id
      );
      if (creditItem) {
        tableData.push({ user: userItem.name, credit: creditItem.credit });
      }
    });
    this.data = tableData;
  }
}
