import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { IEmployee } from '../models/IEmployee';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/assets/data/employees.json";
  private _urlSpaceScreen: string = "/asset/data/spaceScreens.json";

  
  constructor(private _http: HttpClient) { }

   getEmployeesData(): Observable<IEmployee[]>{
     //return this._http.get<IEmployee[]>(this._url);
     return this._http.get<IEmployee[]>(this._url)
                .pipe(
                  catchError(this.errorHandler)
                );
   }

   errorHandler(error: HttpErrorResponse){
     return observableThrowError(error.message || "server Error");
   }

}
