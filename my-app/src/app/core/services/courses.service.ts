import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly COURSES_URL: string = 'http://localhost:3004/courses';

  public coursesList: ICourse[];

  constructor(private http: HttpClient) { }

  public getList(start?: number, count?: number, sort?: string, textFragment?: string): Observable<any> {
    return this.http.get<any>(`${this.COURSES_URL}?start=${start}&count=${count}`);
  }

  public createCourse(course: ICourse): void {
    this.coursesList.push(course);
  }

  public getItemById(id: number): ICourse {
    return this.coursesList.find(item => item.id === id);
  }

  public updateItem(id: number, newData: ICourse): void {
    const item: ICourse = this.coursesList.find(el => el.id === id);
    item.name = newData.name;
    item.length = newData.length;
    item.date = newData.description;
    item.description = newData.description;
    item.isTopRated = newData.isTopRated;
  }

  public removeItem(id: number): void {
    this.coursesList = this.coursesList.filter(item => item.id !== id);
    console.log(this.coursesList);
  }
}
