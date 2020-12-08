import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList: ICourse[] = [
    {
      id: 1,
      title: 'Video Course 1. Angular',
      duration: '160m',
      creationDate: '10/5/2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      top: true
    },
    {
      id: 2,
      title: 'Video Course 1. React',
      duration: '45m',
      creationDate: '12/20/2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      top: false
    },
    {
      id: 3,
      title: 'Video Course 1. Node.js',
      duration: '180m',
      creationDate: '10/10/2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      top: false
    },
    {
      id: 4,
      title: 'Video Course 1. Java Script',
      duration: '90m',
      creationDate: '10/10/2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      top: true
    },
  ];

  constructor() { }

  public getList(): ICourse[] {
    return this.coursesList;
  }

  public createCourse(course: ICourse): void {
    this.coursesList.push(course);
  }

  public getItemById(id: number): ICourse {
    return this.coursesList.find(item => item.id === id);
  }

  public updateItem(id: number, newData: ICourse): void {
    const item: ICourse = this.coursesList.find(el => el.id === id);
    item.title = newData.title;
    item.duration = newData.duration;
    item.creationDate = newData.creationDate;
    item.description = newData.description;
    item.top = newData.top;
  }

  public removeItem(id: number): void {
    this.coursesList = this.coursesList.filter(item => item.id !== id);
    console.log(this.coursesList);
  }
}
