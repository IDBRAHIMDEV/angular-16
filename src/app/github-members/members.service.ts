import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { SearchUsers } from './models/search-users';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  membersList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  serearchMembers(member: string): Observable<SearchUsers> {
    return this.http.get<SearchUsers>(
      `https://api.github.com/search/users?q=${member}`
    );
  }
}
