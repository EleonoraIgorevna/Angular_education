import { Injectable } from '@angular/core';
import { ICrosswordDTO, TCrossword } from '../_models/crossword.models';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CrosswordApiService {

    private host: string = 'http://localhost:1002';

    constructor(
        private http: HttpClient
    ) { }

    public get(): Observable<TCrossword> {
        return this.http.get<TCrossword>(`${this.host}/crossword/64fdd5e27adf53a7a04e907e`);
    }

}

