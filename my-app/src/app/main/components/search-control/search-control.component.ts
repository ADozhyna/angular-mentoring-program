import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  public inputValue: string;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.inputValue) {
      this.search.emit(this.inputValue);
    }
  }

}
