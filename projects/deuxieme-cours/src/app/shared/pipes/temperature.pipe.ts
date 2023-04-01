import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(temperature: number, flag: string): number {
    switch (flag) {
      case 'F':
        return (temperature * 9) / 5 + 32;
      case 'C':
        return ((temperature - 32) * 5) / 9;
      default:
        return temperature;
    }
  }
}
