import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  public inputValue: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public submit() {
    if(this.inputValue) {
      console.log(this.inputValue);
    }
  }

}
