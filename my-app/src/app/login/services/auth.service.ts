import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;

  public user: { email: string; password: string; token: string } = {
    email: '',
    password: '',
    token: ''
  };

  constructor(private ruoter: Router) { }

  public loginUser(): void {
    this.user.token = String(Math.random());
    this.isAuthenticated = true;
    this.ruoter.navigateByUrl('/courses');
    localStorage.setItem('token', this.user.token);
    console.log('logged is successfully');
  }

  public logout(): void {
    this.isAuthenticated = false;
    this.user.email = '';
    this.user.password = '';
    this.user.token = '';
    localStorage.removeItem('token');
    this.ruoter.navigateByUrl('/login')
  }

  public getUserInfo(): string {
    return this.user.email;
  }
}
