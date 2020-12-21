import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ICourse } from "src/app/shared/models/course.model"
import { CoursesAction, GET_COURSES_LIST, LOAD_COURSES, SET_COURSE } from "../actions/courses.actions"

export interface CoursesState {
    list: ICourse[],
    searchCriteria: string;
  }
  
  const initialState: CoursesState = {
    list: [],
    searchCriteria: '',
  }
  
  export function coursesReducer(
    state = initialState,
    action: CoursesAction,
  ) {
    switch (action.type) {
      case GET_COURSES_LIST:
        return {
          ...state,
          list: action.payload.courses,
          searchCriteria: action.payload.searchCriteria,
        }
      case SET_COURSE:
        return {
          ...state,
          list: state.list.concat(action.payload.courses),
          searchCriteria: action.payload.searchCriteria,
        }
      case LOAD_COURSES:
        return {
          ...state,
          searchCriteria: action.payload.searchCriteria,
        }
      default:
        return state
    }
  }

const coursesStateSelector = createFeatureSelector('courses');
  
export const coursesSelector = createSelector(coursesStateSelector, (state: CoursesState) => state.list);
export const searchCriteriaSelector = createSelector(coursesStateSelector, (state: CoursesState) => state.searchCriteria);