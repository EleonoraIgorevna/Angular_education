import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
  
  
export class CellComponent {

  @Input() inputFromRow: number | string = ""

  readonly cellForm = new FormGroup({
    cellValue: new FormControl(''),
  });

  readonly mask: MaskitoOptions = {
    mask: [/[а-я]/i],
  };

}
