import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ModalComponent } from '../modal/modal.component';

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

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.coursesService.getList(0, this.count)
      .subscribe(
        data => {
        this.coursesList = data;
        this.count = this.coursesList.length;
      },
        (err: HttpErrorResponse) => console.log(err)
      );
  }

  public ngOnChanges(): void {
    this.coursesService.getList(0, 3, 'date', this.searchString)
      .subscribe(
        result => {
        this.coursesList = result;
        this.count = this.coursesList.length;
      },
        (e: HttpErrorResponse) => console.log(e)
      );
  }

  public onLoad(): void {
    this.coursesService.getList(this.count, this.count + 1, 'date', this.searchString)
      .subscribe(
        data => {
        const res: ICourse[] = data.slice(0, 1); // это выглядит странно, но на бекенде он не хочет слайсить до заданного значения
        this.coursesList = this.coursesList.concat(res);
        this.count = this.coursesList.length;
      });
  }

  public removeCourse(course: ICourse): void {
    this.dialog.open(ModalComponent, {
      width: '500px'
    }).afterClosed().subscribe((isConfirmed) => {
      if (isConfirmed) {
        let id: number = course.id;
        this.coursesService.removeItem(id)
          .subscribe(data => {
            this.coursesList = data;
          });
      }
    });
  }
}
