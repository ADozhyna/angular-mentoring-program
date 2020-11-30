import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }

  public login(): void {
    this.authService.loginUser(this.user.login, this.user.password)
      .subscribe(data => {
        if(data.token) {
          this.router.navigateByUrl('/courses');
        }
      });
  }

  public ngOnInit(): void {
  }

}
