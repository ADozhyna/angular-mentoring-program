import { Component, DoCheck, Input, OnInit, SimpleChange } from '@angular/core';
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
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<ICourse[]>;
  @Input() public searchString: string;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.coursesList$ = this.coursesService.getList(0, 3);
  }

  /*public ngDoCheck(): void {
    this.coursesList = this.coursesService.getList();
    this.coursesList = this.filterPipe.transform(this.coursesList, this.searchString);
  }*/

  public onLoad(): void {
    console.log('loading...');
  }

}
