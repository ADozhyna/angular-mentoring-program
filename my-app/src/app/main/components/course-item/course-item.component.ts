import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() public course: ICourse;

  public publicationDate: string;

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
    this.publicationDate = this.course.creationDate;
  }

  public onRemove(id: number): void {
    this.dialog.open(ModalComponent, {
      width: '600px',
      data: id
    });
  }

}
