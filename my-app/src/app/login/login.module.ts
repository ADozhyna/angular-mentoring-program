import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [LoginPageComponent]
})
export class LoginModule { }
