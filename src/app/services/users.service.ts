import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers(): Observable<any> {
    return this.httpClient.get('https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users');
  }
}
