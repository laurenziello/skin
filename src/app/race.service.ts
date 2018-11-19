import { Injectable } from '@angular/core';
import { RACES } from './mock-races';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  getRaces(): Observable<any> {
    return of(RACES);
  }
}
