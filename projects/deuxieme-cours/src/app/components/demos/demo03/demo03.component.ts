import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss'],
})
export class Demo03Component {
  nombre: number = 0;
  nombre2: number = 0;

  incrementer(): void {
    this.nombre++;
  }

  decrementer(): void {
    this.nombre--;
  }

  reset(): void {
    this.nombre = 0;
  }

  incrementer2(): void {
    this.nombre2++;
  }

  decrementer2(): void {
    this.nombre2--;
  }

  reset2(): void {
    this.nombre2 = 0;
  }
}
