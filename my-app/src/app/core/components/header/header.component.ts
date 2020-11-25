import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isToken: string;

  constructor(private authService: AuthService) { }

  get isLogin(): boolean {
    return this.authService.isAuthenticated;
  }

  public ngOnInit(): void {
    this.isToken = localStorage.getItem('token');
  }

}
