import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    const min = Number(value.slice(0, -1));
    if (min > 60) {
      const h = Math.floor(min / 60);
      const m = min % 60;
      return `${h}h ${m}min`;
    } else {
      return `${min}min`
    }
    
  }

}
