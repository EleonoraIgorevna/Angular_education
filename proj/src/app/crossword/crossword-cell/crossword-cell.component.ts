import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { TCell } from '../_models/crossword.models';

@Component({
  selector: 'crossword-cell',
  templateUrl: './crossword-cell.component.html',
  styleUrls: ['./crossword-cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordCellComponent {
  @Input({ required: true }) public cell: TCell = 0;

  public readonly mask: MaskitoOptions = {
    mask: [/[а-я]/i],
  };

  constructor(private cdr: ChangeDetectorRef) {};

  public inputChange(): void {
    console.log(this.cell);
  }

}
