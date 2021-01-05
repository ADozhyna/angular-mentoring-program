import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { ICourse } from 'src/app/shared/models/course.model';
import { CoursesActions, GET_COURSES_LIST, LOAD_COURSES, SET_COURSE } from '../actions/courses.actions';

export interface CoursesState {
    list: ICourse[];
    searchCriteria: string;
  }

const initialState: CoursesState = {
  list: [],
  searchCriteria: '',
}
  
export function coursesReducer(
  state: CoursesState = initialState,
  action: CoursesActions,
): CoursesState {
  const { payload } = action as any;
  switch (action.type) {
    case GET_COURSES_LIST:
      return {
        ...state,
        list: payload.courses,
        searchCriteria: payload.searchCriteria,
      };
    case SET_COURSE:
      return {
        ...state,
        list: state.list.concat(payload.courses),
        searchCriteria: payload.searchCriteria,
      };
    case LOAD_COURSES:
      return {
        ...state,
        searchCriteria: payload.searchCriteria,
      };
  default:
    return state;
  }
}

const coursesStateSelector: MemoizedSelector<object, unknown, DefaultProjectorFn<unknown>> = createFeatureSelector('courses');
  
export const coursesSelector: MemoizedSelector<object, ICourse[], DefaultProjectorFn<unknown>> = createSelector(coursesStateSelector, (state: CoursesState) => state.list);
export const searchCriteriaSelector: MemoizedSelector<object, string, DefaultProjectorFn<unknown>> = createSelector(coursesStateSelector, (state: CoursesState) => state.searchCriteria);
