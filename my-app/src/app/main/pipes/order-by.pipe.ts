import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(courses: ICourse[], order: string): unknown {
    switch (order) {
      case 'upDate': {
        return courses.sort((a: ICourse, b: ICourse) => {
          const dateA: Date = new Date(a.date);
          const dateB: Date = new Date(b.date);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
        });
      }
      case 'downDate': {
        return courses.sort((a: ICourse, b: ICourse) => {
          const dateA: Date = new Date(a.date);
          const dateB: Date = new Date(b.date);
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
        });
      }
     default:
        return courses;
    }

  }

}
