import { Injectable } from '@angular/core';
import { RACES } from './mock-races';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NEXT } from './mock-next';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private apiUrl = 'https://fe-mst.mstchannel.com/restproxyhts/rest/program/';


  constructor(
    private http: HttpClient) { }

  getRaces(): Observable<any>  {
    return this.http.get<any>(this.apiUrl + 'races')
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('getRaces', []))
      );
  }

  getNext(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'next')
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('getNext', []))
      );
  }


  getRace(id: number): Observable<any> {
    const url = `${this.apiUrl}/race/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched data id=${id}`)),
      catchError(this.handleError<any>(`getRace id=${id}`))
    );
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
