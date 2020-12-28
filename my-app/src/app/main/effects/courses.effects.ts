import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, pluck, tap, switchMap, withLatestFrom } from 'rxjs/operators';

import {
  CREATE_COURSE,
  DeleteCourseAction,
  DELETE_COURSE,
  GetListAction,
  GET_COURSE_BY_ID,
  LoadCoursesAction,
  LOAD_COURSES,
  LOAD_MORE_COURSES,
  SetCourseAction,
  UPDATE_COURSE
} from '../actions/courses.actions';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { select, Store } from '@ngrx/store';
import { searchCriteriaSelector } from '../reducers/courses.reducer';
import { ICourse } from 'src/app/shared/models/course.model';

@Injectable()
export class CoursesEffects {
  @Effect()
  public loadCourses$: Observable<GetListAction> = this.actions$.pipe(
    ofType(LOAD_COURSES),
    pluck('payload'),
    switchMap(
      ({ searchCriteria, counter, num }) => this.coursesService.getList(counter, num, 'date', searchCriteria)
        .pipe(
          map((courses) => new GetListAction({courses, searchCriteria}),
        )
    )
  ));

  @Effect()
  public loadMoreCourses$: Observable<SetCourseAction> = this.actions$.pipe(
    ofType(LOAD_MORE_COURSES),
    pluck('payload'),
    switchMap(
      ({ searchCriteria, counter, num }) => this.coursesService.getList(counter, num, 'date', searchCriteria)
        .pipe(
          map((courses) => {
            const course: ICourse[] = courses.slice(0, 1);
            return new SetCourseAction({ courses: course, searchCriteria });
          },
        )
    )
  ));

  @Effect()
  public deleteCourse$: Observable<LoadCoursesAction> = this.actions$.pipe(
    ofType(DELETE_COURSE),
    map((action: DeleteCourseAction) => action.payload),
    withLatestFrom(this.store.pipe(select(searchCriteriaSelector))),
    switchMap(
      ([ id, searchCriteria ]) => this.coursesService.removeItem(id)
        .pipe(
          map(() => new LoadCoursesAction({ searchCriteria }))
        )
    )
  );

  @Effect({ dispatch: false })
  public createCourse$: Observable<any> = this.actions$.pipe(
    ofType(CREATE_COURSE),
    pluck('payload'),
    switchMap(
      (course: ICourse) => this.coursesService.createCourse(course)
        .pipe(
          tap(() => this.router.navigate(['/'])),
        )
    )
  );

  @Effect({ dispatch: false })
  public updateCourse$: Observable<any> = this.actions$.pipe(
    ofType(UPDATE_COURSE),
    pluck('payload'),
    switchMap(
      ({ course, id }) => this.coursesService.updateItem(id, course)
        .pipe(
          tap(() => this.router.navigate(['/'])),
        )
    )
  );

  @Effect({ dispatch: false })
  public getCourseById$: Observable<any> = this.actions$.pipe(
    ofType(GET_COURSE_BY_ID),
    pluck('payload'),
    switchMap(
      ({ id }) => this.coursesService.getItemById(id)
        .pipe(
          map((course) => {
            return new SetCourseAction({ courses: [course] });
          },
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store,
    private router: Router
  ) {}
}
