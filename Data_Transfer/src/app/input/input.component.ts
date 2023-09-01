import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
  @Output() newEvent = new EventEmitter<string>();

  ourInputParam(text: string) {
    this.newEvent.emit(text);
  }
}
