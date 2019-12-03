import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUser(id: number | string) {
    return this.http.get(`/users/${id}`);
  }

  deleteUser(id: number | string) {
    return this.http.delete(`/users/${id}`);
  }

  register(credentials: any) {
    console.log(credentials)
    return this.http.post(`/users/register`, credentials)
  }

}
