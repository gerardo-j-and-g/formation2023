import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celToFah',
})
export class CelToFahPipe implements PipeTransform {
  transform(cel: number): number {
    return (cel * 9) / 5 + 32;
  }
}
