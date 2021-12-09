import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

import { Observable, throwError  } from "rxjs";
import { catchError, map } from 'rxjs/operators';


import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API)
      .pipe(map((data: Passenger[]) => data))
      .pipe(catchError(error => throwError(error.json())))
    }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return this.http
      .put<Passenger>(PASSENGER_API + "/" + passenger.id, passenger, {headers: headers})
      .pipe(map((data: Passenger) => data))
      .pipe(catchError(error => throwError(error.json())));
    }

    removePassengers(passenger: Passenger): Observable<Passenger> {
      return this.http
        .delete<Passenger>(PASSENGER_API + "/" + passenger.id)
        .pipe(map((data: Passenger) => data))
        .pipe(catchError(error => throwError(error.json())));
      }
}