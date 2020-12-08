import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public src: string = '/assets/page-not-found.png';

  constructor() { }

  public ngOnInit(): void {
  }

}
