import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() public course: ICourse;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

  public publicationDate: string;

  constructor() { }

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    this.publicationDate = this.course.creationDate;
  }

  public onRemove(id: number): void {
    this.remove.emit(id);
  }

}
