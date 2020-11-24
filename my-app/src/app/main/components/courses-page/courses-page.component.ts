import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public searchString: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSearch(searchString: string): void {
    this.searchString = searchString;
  }

}
