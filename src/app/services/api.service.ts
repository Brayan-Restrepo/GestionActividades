import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';


import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string): Observable<any> {
    return this.http.get(url)
        .map(response => response)
        .catch(this.handleError);
  }

  public post(url: string, data: {} = {}): Observable<any> {
    return this.http.post(url, data)
      .map(response => response)
      .catch(this.handleError);
  }

  public put(url: string, data: {} = {}): Observable<any> {
    return this.http.put(url, data)
      .map(response => response)
      .catch(this.handleError);
  }

  public delete(url: string): Observable<any> {

    return this.http.delete(url)
      .map(response => response)
      .catch(this.handleError);
  }

  private crearHeader() {
    const options = new RequestOptions({
      /* headers: new Headers({
        'token': 'xxxxxxxx'
      })*/
    });
    return options;
  }

  private handleError(error: HttpErrorResponse) {
    // Error en el cliente
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return Observable.throw({});
    } else {
      // Error en el frond
      if (typeof error.error === 'object') {

      }
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return Observable.throw({ 'status': error.status, 'message': error.error });
    }
    // return an observable with a user-facing error message
    // return Observaoble.thrw('Algo ocurrio intente de nuevo mas tarde.');
  }
}
