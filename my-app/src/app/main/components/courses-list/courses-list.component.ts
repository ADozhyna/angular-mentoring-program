import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ICourse } from 'src/app/shared/models/course.model';
import { DeleteCourseAction, LoadCoursesAction, LoadMoreCoursesAction } from '../../actions/courses.actions';
import {  coursesSelector } from '../../reducers/courses.reducer';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  private debounceSubject: Subject<string> = new Subject<string>();

  public coursesList: Observable<ICourse[]> = this.store.pipe(select(coursesSelector));
  public searchString: FormControl = new FormControl();
  public count: number = 4;

  public searchSubscription: Subscription;

  constructor(
    private filterPipe: FilterPipe,
    private dialog: MatDialog,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(new LoadCoursesAction({}));

    this.searchSubscription = this.debounceSubject
      .pipe(
        filter((value) => !value.length || value.length >= 3),
        debounceTime(1000)
      ).subscribe(() => {
        this.loadCourses();
        this.count = 4;
      });

    this.searchString.valueChanges.subscribe((value) => this.debounceSubject.next(value));
  }

  public loadCourses() {
    this.store.dispatch(new LoadCoursesAction({ searchCriteria: this.searchString.value }));
  }

  public onLoad(): void {
    this.store.dispatch(new LoadMoreCoursesAction({ searchCriteria: this.searchString.value, counter: this.count, num: this.count + 1 }));
    this.count += 1;
  }

 public removeCourse(course: ICourse): void {
    this.dialog.open(ModalComponent, {
      width: '500px'
    }).afterClosed().subscribe((isConfirmed) => {
      if (isConfirmed) {
        let id: number = course.id;
        this.store.dispatch(new DeleteCourseAction(id));
        this.count = 4;
      }
    });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
