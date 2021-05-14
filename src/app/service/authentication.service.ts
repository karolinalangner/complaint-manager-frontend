import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../constants';
import { Router } from '@angular/router';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

export class User {
  constructor(
    public username: String,
    public id: Number,
    public firstName: String,
    public lastName: String,
    public authorities: any
    ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient, private router: Router ) { }

  executeAuthenticationService(username, password) {
      
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
    this.router.navigate(["/login"])
  }
  getUser(username){
    return this.http.get<User>(`${API_URL}/jpa/${username}/user`);
  }
}

export class AuthenticationBean{
constructor(public message:string) { }
}