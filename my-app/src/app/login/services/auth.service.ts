import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;
  public user = {
    email: '',
    password: '',
    token: ''
  };

  constructor() { }

  public loginUser(): void {
    this.user.token = String(Math.random());
    this.isAuthenticated = true;
    localStorage.setItem('token', this.user.token);
    console.log('logged is successfully')
  }

  public logout(): void {
    this.isAuthenticated = false;
    this.user.email = '';
    this.user.password = '';
    this.user.token = '';
    localStorage.removeItem('token');
  }

  public getUserInfo() {
    return this.user.email;
  }
}
