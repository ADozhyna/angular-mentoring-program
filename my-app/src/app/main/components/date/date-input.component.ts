import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  public date: string;

  @Input() model: ICourse;
  @Output() public updateDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
    if(this.model.creationDate) {
      this.date = this.model.creationDate;
    }
  }

  public emitDate(): void {
    this.updateDate.emit(this.date);
  }

}
