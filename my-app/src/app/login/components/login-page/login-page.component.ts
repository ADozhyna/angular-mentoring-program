import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public userForm: FormGroup;

  constructor(private store: Store<AuthState>, private fb: FormBuilder) { }

  public login(): void {
   this.store.dispatch(new LogInAction(this.userForm.value));
  }

  public ngOnInit(): void {
    this.userForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
