import { Component } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss'],
})
export class Exo02Component {
  compteur: number = 0;

  add() {
    this.compteur++;
  }
  remove() {
    this.compteur--;
  }
  reset() {
    this.compteur = 0;
  }
}
