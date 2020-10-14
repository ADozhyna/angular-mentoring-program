import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    const min = Number(value.slice(0, -1));
    if (min > 60) {
      const hours = String((min / 60).toFixed(2)).split('.');
      return `${hours[0]}h ${hours[1]}min`
    } else {
      return `${min}min`
    }
    
  }

}
