import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginSrc: string = 'assets/login.svg';
  public logOutSrc: string = 'assets/logout.svg'

  constructor(private loginService: AuthService) { }

  public logOut() {
    console.log('logout');
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

}
