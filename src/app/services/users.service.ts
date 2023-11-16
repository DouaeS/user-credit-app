import { Injectable } from '@angular/core';
import { User } from '@interfaces/index';
import { Observable, of, delay } from 'rxjs';

@Injectable()
export class UsersService {
  private firstCall = true;

  getUsers(searchUser: string): Observable<User[]> {
    if (searchUser.length >= 10) {
      //simulation of Api call erroring
      throw new Error('Error of getUsers!');
    } else {
      const filteredUsers = users.filter((value: User) =>
        value.name.toLowerCase().includes(searchUser.toLowerCase())
      );
      if (this.firstCall) {
        this.firstCall = false;
        //simulation of api call on delay
        return of(filteredUsers).pipe(delay(1000));
      } else {
        return of(filteredUsers);
      }
    }
  }
}

const users: User[] = [
  { id: 1, name: 'Sam' },
  { id: 2, name: 'Ella' },
  { id: 3, name: 'Roy' },
  { id: 4, name: 'Rober' },
  { id: 5, name: 'John' },
  { id: 6, name: 'Trevor' },
  { id: 7, name: 'Tanjiro' },
];
