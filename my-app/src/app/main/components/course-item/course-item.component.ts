import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() public course: ICourse;

  @Output() public remove: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  public publicationDate: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
    this.publicationDate = this.course.date;
  }

  public onRemove(): void {
    this.remove.emit(this.course);
  }

}
