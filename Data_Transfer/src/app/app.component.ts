import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Transfer';

  someTexts: string[] = [];

  addText(text: string) {
    this.someTexts.push(text);
    console.log(this.someTexts);
  }










}
