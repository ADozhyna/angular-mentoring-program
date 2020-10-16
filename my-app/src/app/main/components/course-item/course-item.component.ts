import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() public course: ICourse;

  public publicationDate: string;

  constructor(private coursesService: CoursesService) { }

  public ngOnInit(): void {  
  }

  public ngOnChanges() {
    this.publicationDate = this.course.creationDate;
  }

  public onRemove(id: number) {
    this.coursesService.removeItem(id);
  }

}
