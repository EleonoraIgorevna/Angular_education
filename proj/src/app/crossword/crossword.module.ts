import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrosswordCellComponent } from './components/crossword-cell/crossword-cell.component';
import { CrosswordComponent } from './components/crossword/crossword.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CrosswordCellComponent,
    CrosswordComponent
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    FormsModule,
    MaskitoModule,
    HttpClientModule
  ],
  exports: [
    CrosswordComponent,
    CrosswordCellComponent
  ]
})
export class CrosswordModule { }
