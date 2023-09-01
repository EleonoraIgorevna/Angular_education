import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'proj';

  //Массив для первичной отрисовки поля
  mainArray = [
    [0, "X", "X", 0, 0, "X"],
    ["X", "X", "X", "X", "X", "X"],
    [0, "X", "X", 0, 0, "X"], 
    [0, "X", "X", "X", "X", "X"]
  ];
}
