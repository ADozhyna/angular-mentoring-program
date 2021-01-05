import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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
  public chooseLangFormControl: FormControl = new FormControl();

  constructor(private store: Store<AuthState>, private translateService: TranslateService) { }

  public ngOnInit(): void {
  }

  public logOut(): void {
    this.store.dispatch(new LogOutAction());
  }

  public changeLang(lang: string) {
    this.translateService.use(lang);
  }

}
