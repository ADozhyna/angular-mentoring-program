import { Action } from '@ngrx/store';
import { ICourse } from 'src/app/shared/models/course.model';

export const LOAD_COURSES: string = '[Courses] Load Courses'
export const GET_COURSES_LIST: string = '[Courses] Get List';
export const CREATE_COURSE: string = '[Courses] Create Course';
export const UPDATE_COURSE: string = '[Courses] Update Course';
export const DELETE_COURSE: string = '[Courses] Delete Course';
export const LOAD_MORE_COURSES: string = '[Courses] Load More Courses';
export const SET_COURSE: string = '[Courses] Set Course';
export const GET_COURSE_BY_ID: string = '[Courses] Get Course By Id'

export class LoadCoursesAction implements Action {
    public readonly type: string = LOAD_COURSES;

    constructor(public payload: { searchCriteria?: string, counter?: number, num?: number  }) {}
}

export class LoadMoreCoursesAction implements Action {
    public readonly type: string = LOAD_MORE_COURSES;

    constructor(public payload: { searchCriteria?: string, counter?: number, num?: number }) {}
}

export class SetCourseAction implements Action {
    public readonly type: string = SET_COURSE;

    constructor(public payload: { courses: ICourse[], searchCriteria?: string }) {}
}


export class GetListAction implements Action {
  public readonly type: string = GET_COURSES_LIST;

  constructor(public payload: { courses: ICourse[], searchCriteria: string }) {}
}

export class GetByIdAction implements Action {
  public readonly type: string = GET_COURSE_BY_ID;

  constructor(public payload: number) {}
}

export class CreateCourseAction implements Action {
  public readonly type: string = CREATE_COURSE;

  constructor(public payload: ICourse) {}
}

export class UpdateCourseAction implements Action {
  public readonly type: string = UPDATE_COURSE;

  constructor(public payload: { id: number; course: ICourse }) {}
}

export class DeleteCourseAction implements Action {
  public readonly type: string = DELETE_COURSE;

  constructor(public payload: number) {}
}

export type CoursesActions = LoadCoursesAction | GetListAction | SetCourseAction | DeleteCourseAction | CreateCourseAction | UpdateCourseAction | GetByIdAction;
