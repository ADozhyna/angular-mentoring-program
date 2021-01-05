import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogInAction, LogOutAction } from 'src/app/login/actions/auth.actions';
import { AuthState, currentUser, isAuthenticated } from 'src/app/login/reducers/auth.reducer';
import { AuthService } from 'src/app/login/services/auth.service';
import { IUser } from 'src/app/shared/models/user-entity.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser$: Observable<any> = this.store.pipe(select(currentUser));
  public loginSrc: string = 'assets/login.svg';
  public logOutSrc: string = 'assets/logout.svg';
  public isLogin$: Observable<any> = this.store.pipe(select(isAuthenticated));

  constructor(private store: Store<AuthState>) { }

  public ngOnInit(): void {
  }

  public logOut(): void {
    this.store.dispatch(new LogOutAction());
  }

}
