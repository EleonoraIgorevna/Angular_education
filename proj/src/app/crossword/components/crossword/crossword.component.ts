import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TCell, ISizeCrossword, ICrosswordDTO, TCrossword } from '../../_models/crossword.models';
import { CrosswordApiService } from '../../api/crossword-api.service';
import { Observable, take, tap } from 'rxjs';
import { CrosswordStoreService } from '../../store/crossword-store.service';



@Component({
  selector: 'crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordComponent {

  public crossword$: Observable<TCrossword> = this.crosswordStoreService.crossword$
    .pipe(
      take(1),
      tap((crossword) => {
        console.log(crossword);
        
        this.sizeCrossword = this.getSizeCrossword(crossword);
        this.cdr.detectChanges();

      })
    );

  public sizeCrossword: ISizeCrossword = {
    xSize: 0,
    ySize: 0
  };

  constructor(
    private crosswordStoreService: CrosswordStoreService,
    private cdr: ChangeDetectorRef
  ) { }

  // @Input({ required: true }) public crosswordInput: TCell[][] = [];
  // @Output() public crosswordOutput = new EventEmitter();

  // public crosswordInput: TCrossword = [
  //   [0, '', '', 0, 0, 'а'],
  //   ['п', 'р', 'и', 'в', 'е', 'т'],
  //   [0, '', '', 0, 0, 'а'],
  //   [0, '', '', '', '', 'с']
  // ];

  public trackByFn(index: number, item: any): string {
    return index + '-' + item.join('-');
  }

  private getSizeCrossword(crosswordInput: TCrossword): ISizeCrossword {
    return {
      xSize: crosswordInput.length === 0 ? 0 : crosswordInput[0].length,
      ySize: crosswordInput.length
    };
  }
}
