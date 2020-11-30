import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: number): string {
    if (value > 60) {
      const h: number = Math.floor(value / 60);
      const m: number = value % 60;
      return `${h}h ${m}min`;
    } else {
      return `${value}min`;
    }
  }
}
