import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogInAction } from '../../actions/auth.actions';
import { AuthState } from '../../reducers/auth.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isPasswordHidden: boolean = true;
  public user: { login: string; password: string } = {
    login: '',
    password: '',
  };

  constructor(private store: Store<AuthState>) { }

  public login(): void {
   this.store.dispatch(new LogInAction(this.user));
  }

  public ngOnInit(): void {
  }

}
