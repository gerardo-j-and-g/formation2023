import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss'],
})
export class Exo03Component {
  compteur: number = 0;
  interval: any;
  btnActive: boolean = true;

  demarrer(): void {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.compteur++;
    }, 1000);
  }
  pause(): void {
    if (!this.interval) return;

    clearInterval(this.interval);
    this.interval = null;
  }
  reset(): void {
    this.pause();
    this.compteur = 0;
  }
}
