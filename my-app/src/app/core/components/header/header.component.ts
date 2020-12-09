import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';
import { IUser } from 'src/app/shared/models/user-entity.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser: IUser;
  public loginSrc: string = 'assets/login.svg';
  public logOutSrc: string = 'assets/logout.svg';

  constructor(private authService: AuthService) { }

  public get isLogin(): BehaviorSubject<boolean> {
    return this.authService.isAuthenticated;
  }

  public ngOnInit(): void {
    this.isLogin.subscribe(value => {
      if (value) {
        this.authService.getUserInfo().subscribe(data => {
          this.currentUser = data;
        });
      }
    });
  }

  public logOut(): void {
    console.log('logout');
    this.authService.logout();
  }

}
