import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: string): string {
    let min: number;
    if (value.includes('h')) {
      min = Number(value.slice(0, -1));
    } else {
      min = Number(value);
    }
    if (min > 60) {
      const h: number = Math.floor(min / 60);
      const m: number = min % 60;
      return `${h}h ${m}min`;
    } else {
      return `${min}min`;
    }
  }
}
