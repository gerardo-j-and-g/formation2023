import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  birthDate: Date = new Date('1983-02-26');
  mail: string = 'gerardocella7@gmail.com';
}
