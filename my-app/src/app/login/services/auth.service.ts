import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../../shared/models/user-entity.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_URL: string = 'http://localhost:3004/auth';
  private currentUserToken: string;

  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public user: { email: string; password: string; token: string } = {
    email: '',
    password: '',
    token: ''
  };

  constructor(private ruoter: Router, private http: HttpClient) { }

  public loginUser(login: string, password: string): Observable<any> {
    return this.http.post(`${this.AUTH_URL}/login`, { login, password })
      .pipe(map((data: {token: string}) => {
        localStorage.setItem('currentUserToken', data.token);
        this.currentUserToken = data.token;
        this.isAuthenticated.next(true);
        return data;
      }));
  }

  public logout(): void {
    this.isAuthenticated.next(false);
    this.user.email = '';
    this.user.password = '';
    this.user.token = '';
    localStorage.removeItem('currentUserToken');
    this.ruoter.navigateByUrl('/login');
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${this.AUTH_URL}/userInfo`, { token: this.currentUserToken });
  }

  public getToken(): string {
    return this.currentUserToken;
  }
}
