import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {

  @Input() inputFromMain: any = "";
  
}
