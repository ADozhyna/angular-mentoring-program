import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isPasswordHidden: boolean = true;
  public user: { email: string; password: string; token: string } = this.authService.user;

  constructor(private authService: AuthService) { }

  public login(): void {
    this.authService.loginUser();
  }

  public ngOnInit(): void {
  }

}
