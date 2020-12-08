import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit, OnChanges {

  public date: string;

  @Input() public model: ICourse;
  @Output() public updateDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
    this.date = this.model.date;
  }

  public ngOnChanges(): void {
    this.date = this.model.date;
  }

  public emitDate(): void {
    this.updateDate.emit(this.date);
  }

}
