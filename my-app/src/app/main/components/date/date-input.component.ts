import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  public date: string;

  @Output() public updateDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public emitDate(): void {
    this.updateDate.emit(this.date);
  }

}
