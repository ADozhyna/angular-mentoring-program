import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CoursesService } from 'src/app/core/services/courses.service';
import { SpinnerLoaderService } from 'src/app/core/services/spinner-loader.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
})
export class CoursesListComponent implements OnInit {
  private count: number = 3;
  private debounceSubject: Subject<string> = new Subject<string>();

  public coursesList: ICourse[] = [];
  public searchString: FormControl = new FormControl();

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private spinnerLoaderService: SpinnerLoaderService
  ) {
    this.spinnerLoaderService.spinnerShow();
  }

  public ngOnInit(): void {
    this.coursesService.getList(0, this.count)
      .subscribe(
        data => {
        this.coursesList = data;
        this.count = this.coursesList.length;
        setInterval(this.spinnerLoaderService.spinnerHide.bind(this.spinnerLoaderService), 2000);
      },
        (err: HttpErrorResponse) => console.log(err)
      );

    this.debounceSubject
      .pipe(
        filter(value => value.length >= 3),
        debounceTime(500)
      ).subscribe(() => {
        this.coursesService.getList(0, this.count, 'date', this.searchString.value)
          .subscribe(
            data => {
              this.coursesList = data;
              this.count = this.coursesList.length;
            });
      });

    this.searchString.valueChanges.subscribe((value) => this.debounceSubject.next(value));
  }

  public onLoad(): void {
    this.coursesService.getList(this.count, this.count + 1, 'date', this.searchString.value)
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
      setInterval(this.spinnerLoaderService.spinnerHide.bind(this.spinnerLoaderService), 2000);
    });
  }
}
