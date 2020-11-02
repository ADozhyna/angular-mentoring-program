import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: string): string {
    const min: number = Number(value.slice(0, -1));
    if (min > 60) {
      const h: number = Math.floor(min / 60);
      const m: number = min % 60;
      return `${h}h ${m}min`;
    } else {
      return `${min}min`;
    }
  }

}
