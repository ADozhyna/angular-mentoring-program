import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit, OnChanges {

  public duration: number;

  @Input() public model: ICourse;
  @Output() public updateDuration: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public emitDuration(): void {
    this.updateDuration.emit(this.duration);
  }

  public ngOnInit(): void {
    if (this.model.length) {
      this.duration = this.model.length;
    }
  }

  public ngOnChanges(): void {
    this.duration = this.model.length;
  }

}
