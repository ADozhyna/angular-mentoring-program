import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(courses: ICourse[], searchString: string): ICourse[] {
    if (!courses || !searchString) {
      return courses;
    } else {
      return courses.filter((course) => course.name.toLowerCase().includes(searchString.toLowerCase()));
    }
  }

}
