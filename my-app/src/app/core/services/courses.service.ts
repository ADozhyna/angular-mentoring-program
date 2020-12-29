import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CourseAuthor, ICourse } from 'src/app/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly COURSES_URL: string = 'http://localhost:3004/courses';
  private readonly AUTHORS_URL = 'http://localhost:3004/authors';

  public coursesList: ICourse[];

  constructor(private http: HttpClient) { }

  public getList(start?: number, count?: number, sort?: string, textFragment?: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.COURSES_URL}?start=${start || 0}&count=${count || 3}&sort=${sort || 'date'}&textFragment=${textFragment || ''}`);
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(`${this.COURSES_URL}`, course);
  }

  public getItemById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.COURSES_URL}/${id}`);
  }

  public updateItem(id: number, newData: ICourse): Observable<ICourse> {
    return this.http.patch<ICourse>(`${this.COURSES_URL}/${id}`, newData);
  }

  public removeItem(id: number): Observable<any> {
    return this.http.delete(`${this.COURSES_URL}/${id}`);
  }

  public getAuthors(): Observable<CourseAuthor[]> {
    return this.http.get<any[]>(`${this.AUTHORS_URL}`).pipe(
      map((response) => {
        return response.map((item) => {
        const fullName = item.name.split(' ');
        return {
          name: fullName[0],
          lastName: fullName[1]
        };
      })}
      )
    );
  }
}
