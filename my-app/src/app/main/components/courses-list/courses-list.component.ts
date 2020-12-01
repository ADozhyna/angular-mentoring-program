import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
})
export class CoursesListComponent implements OnInit, OnChanges {
  private count: number = 3;
  public coursesList: ICourse[] = [];
  @Input() public searchString: string;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.coursesService.getList(0, this.count)
      .subscribe(data => {
        this.coursesList = data;
        this.count = this.coursesList.length;
      });
  }

  public ngOnChanges(): void {
  }

  public onLoad(): void {
    this.coursesService.getList(this.count, this.count + 1)
      .subscribe(data => {
        const res = data.slice(0, 1); // это выглядит странно, но на бекенде он не хочет слайсить до заданного значения
        this.coursesList = this.coursesList.concat(res);
        this.count = this.coursesList.length;
      })
  }

}
