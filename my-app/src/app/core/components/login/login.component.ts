import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginSrc: string = 'assets/login.svg';
  public logOutSrc: string = 'assets/logout.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
