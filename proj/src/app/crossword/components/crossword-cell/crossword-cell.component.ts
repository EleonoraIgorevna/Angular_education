import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { TCell } from '../../_models/crossword.models';
import { CrosswordStoreService } from '../../store/crossword-store.service';

@Component({
  selector: 'crossword-cell',
  templateUrl: './crossword-cell.component.html',
  styleUrls: ['./crossword-cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordCellComponent implements OnChanges {
  private _cell: TCell = 0;
  @Input({ required: true }) public set cell(value: TCell) {
    console.log(value, '@Input', this.i, this.j);
    
    this._cell = value;
    if (typeof value === 'string') {
      this.cellForm.controls.cell.setValue(value);
    }
  }
  public get cell(): TCell {
    return this._cell;
  }
  public cellForm = new FormGroup({
    cell: new FormControl(''),
    cellDisabled: new FormControl()
  });
  @Input({ required: true }) public i!: number;
  @Input({ required: true }) public j!: number;

  public readonly mask: MaskitoOptions = {
    mask: [/[а-я]/i],
  };

  constructor(
    private crosswordStoreService: CrosswordStoreService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.i, this.j);
    
  }

  public inputChange(event: any): void {
    this.cdr.detectChanges();
    
    console.log(this.cell, 'this.cell');
    console.log(this.cellForm.controls.cell.value, 'this.cellForm.value');
    

    if (this.cellForm.controls.cell.value === this.cell) return;
    if (this.cellForm.controls.cell.value === null) return;

    console.log(this.i, this.j, 'setItem');
    
    this.crosswordStoreService.setItem(this.i, this.j, this.cellForm.controls.cell.value);
  }

}
