import { Component } from '@angular/core';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {}
  get isLogin(): boolean {
    return this.authService.isAuthenticated;
  }
}
