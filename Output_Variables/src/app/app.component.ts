import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Output_Variables';

  value: any = [];  
  
  event(text: string) {
    this.value.push(text);
    console.log(this.value);
  }
}
