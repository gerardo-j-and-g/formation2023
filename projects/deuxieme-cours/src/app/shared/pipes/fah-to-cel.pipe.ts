import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahToCel',
})
export class FahToCelPipe implements PipeTransform {
  transform(fah: number): number {
    return ((fah - 32) * 5) / 9;
  }
}
