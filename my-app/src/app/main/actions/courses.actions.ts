import { Action } from "@ngrx/store";
import { ICourse } from "src/app/shared/models/course.model";

export const LOAD_COURSES = '[Courses] Load Courses'
export const GET_COURSES_LIST = '[Courses] Get List';
export const CREATE_COURSE = '[Courses] Create Course';
export const UPDATE_COURSE = '[Courses] Update Course';
export const DELETE_COURSE = '[Courses] Delete Course';
export const LOAD_MORE_COURSES = '[Courses] Load More Courses';
export const SET_COURSE = '[Courses] Set Course';

export class LoadCoursesAction implements Action {
    public readonly type = LOAD_COURSES;

    constructor(public payload: {searchCriteria?: string, counter?: number, num?: number  }) {}
}

export class LoadMoreCoursesAction implements Action {
    public readonly type = LOAD_MORE_COURSES;

    constructor(public payload: {searchCriteria?: string, counter?: number, num?: number }) {}
}

export class SetCourseAction implements Action {
    public readonly type = SET_COURSE;

    constructor(public payload: { courses: ICourse[], searchCriteria: string }) {}
}


export class GetListAction implements Action {
  public readonly type = GET_COURSES_LIST;

  constructor(public payload: { courses: ICourse[], searchCriteria: string }) {}
}

/* export class GetByIdAction implements Action {
  public readonly type = GET_BY_ID;

  constructor(public payload: number) {}
} */

export class CreateCourseAction implements Action {
  public readonly type = CREATE_COURSE;

  constructor(public payload: ICourse) {}
}

export class UpdateCourseAction implements Action {
  public readonly type = UPDATE_COURSE;

  constructor(public payload: { id: number; course: ICourse }) {}
}

export class DeleteCourseAction implements Action {
  public readonly type = DELETE_COURSE;

  constructor(public payload: number) {}
}

export type CoursesAction = LoadCoursesAction | GetListAction | SetCourseAction | DeleteCourseAction | CreateCourseAction | UpdateCourseAction;