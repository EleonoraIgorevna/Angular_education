import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, take } from 'rxjs';
import { TCrossword } from '../_models/crossword.models';
import { CrosswordApiService } from '../api/crossword-api.service';

@Injectable({
  providedIn: 'root'
})
export class CrosswordStoreService {

  /**
   * Хранит в себе кроссворд, который изменяет состояние через методы setCrossword и setItem
   */
  private crossword: BehaviorSubject<TCrossword> = new BehaviorSubject<TCrossword>([]);
  public crossword$: Observable<TCrossword> = this.crossword.asObservable()
    .pipe(
      filter(crossword => crossword.length !== 0)
    );

  constructor(
    private crosswordApiService: CrosswordApiService
  ) {
    this.crosswordApiService.get()
      .pipe(
        take(1)
      )
      .subscribe(crossword => {
        this.crossword.next(crossword);
      });
  }

  public setCrossword(crossword: TCrossword): void {
    this.crossword.next(crossword);
  }
    
  public setItem(i: number, j: number, value: string): void {
    const crossword = this.crossword.value;

    console.log(crossword.length, 'crossword.length');
    console.log(crossword[i].length, 'crossword[i].length');
    
    // if ((i < (crossword.length - 1)) || (i >= crossword.length)) throw new Error(`i = ${i} не подходит`);
    // if ((j < (crossword.length - 1)) || (j >= crossword.length)) throw new Error(`j = ${j} не подходит`);

    crossword[i][j] = value;

    this.crossword.next(crossword);
  }

}
