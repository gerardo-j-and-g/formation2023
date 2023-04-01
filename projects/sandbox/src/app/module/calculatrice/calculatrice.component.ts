import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
})
export class CalculatriceComponent {
  screen: string = '';
  total: number = 0;
  operator: string = '+';

  addNumber(n: number | string) {
    if (n === 'C') {
      this.screen = '';
      this.total = 0;
      return;
    }
    if (n === '.') if (this.screen.includes('.')) return;

    if (
      this.screen.endsWith('+') ||
      this.screen.endsWith('-') ||
      this.screen.endsWith('*') ||
      this.screen.endsWith('/')
    ) {
      switch (this.operator) {
        case '+':
          this.total += parseFloat(this.screen.slice(0, -1));
          break;
        case '-':
          this.total -= parseFloat(this.screen.slice(0, -1));
          break;
        case '*':
          this.total *= parseFloat(this.screen.slice(0, -1));
          break;
        case '/':
          this.total /= parseFloat(this.screen.slice(0, -1));
          break;
      }

      this.operator = this.screen.slice(-1);
      this.screen = '';
    }

    this.screen += n.toString();
  }

  addOperator(o: string) {
    if (this.screen === '') {
      return;
    }
    if (this.screen.endsWith('.')) {
      return;
    }
    if (
      this.screen.endsWith('+') ||
      this.screen.endsWith('-') ||
      this.screen.endsWith('*') ||
      this.screen.endsWith('/')
    ) {
      this.screen = this.screen.slice(0, -1);
    }

    this.screen += o;
  }

  calculate() {
    if (this.screen === '') {
      return;
    }
    if (this.screen.endsWith('.')) {
      return;
    }
    if (
      this.screen.endsWith('+') ||
      this.screen.endsWith('-') ||
      this.screen.endsWith('*') ||
      this.screen.endsWith('/')
    ) {
      this.screen = this.screen.slice(0, -1);
    }

    switch (this.operator) {
      case '+':
        this.total += parseFloat(this.screen);
        break;
      case '-':
        this.total -= parseFloat(this.screen);
        break;
      case '*':
        this.total *= parseFloat(this.screen);
        break;
      case '/':
        this.total /= parseFloat(this.screen);
        break;
    }

    this.screen = this.total.toString();
  }
}
