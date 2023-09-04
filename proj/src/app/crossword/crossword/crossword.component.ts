import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TCell, ISizeCrossword } from '../_models/crossword.models';

@Component({
  selector: 'crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordComponent implements OnChanges, OnInit {
  @Input({ required: true }) public crosswordInput: TCell[][] = [];
  @Output() public crosswordOutput = new EventEmitter();

  public sizeCrossword: ISizeCrossword = {
    xSize: 0,
    ySize: 0
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.sizeCrossword = this.getSizeCrossword(this.crosswordInput);

    console.log(this.sizeCrossword);

  }

  ngOnInit(): void {
    // слушать изменение состояния хранилища сервиса
  }

  private getSizeCrossword(crosswordInput: TCell[][]) {

    // if (crosswordArr.length === 0) {
    //   return {
    //     xSize: 0,
    //     ySize: 0
    //   };
    // }

    // return {
    // xSize: crosswordArr[0].length,
    // ySize: crosswordArr.length
    // };

    return {
      xSize: crosswordInput.length === 0 ? 0 : crosswordInput[0].length,
      ySize: crosswordInput.length
    };
  }
}
