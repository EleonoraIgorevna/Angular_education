import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'proj';

  //Массив для первичной отрисовки поля
  // crosswordArr = [
  //   [0, '', '', 0, 0, 'а'],
  //   ['п', 'р', 'и', 'в', 'е', 'т'],
  //   [0, '', '', 0, 0, 'а'],
  //   [0, '', '', '', '', 'с']
  // ];

  constructor() { }
}
