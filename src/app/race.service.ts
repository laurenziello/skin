import { Injectable } from '@angular/core';
import { RACES } from './mock-races';
import { Observable, of } from 'rxjs';
import { NEXT } from './mock-next';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  getRaces(): Observable<any> {
    return of(RACES);
  }

  getNext(): Observable<any> {
    return of(NEXT);
  }
}
