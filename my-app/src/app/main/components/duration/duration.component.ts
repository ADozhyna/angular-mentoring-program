import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {

  public duration: string;

  @Input() public model: ICourse;
  @Output() public updateDuration: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emitDuration(): void {
    this.updateDuration.emit(this.duration);
  }

  public ngOnInit(): void {
    if (this.model.duration) {
      this.duration = this.model.duration;
    }
  }

}
