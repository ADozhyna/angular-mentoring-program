import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(courses: ICourse[], searchString: string): ICourse[] {
    if (!courses || !searchString) {
      return courses;
    }

    return courses.filter((course) => course.title.toLowerCase().includes(searchString.toLowerCase()));
  }
}
