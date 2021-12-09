import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable,  } from "rxjs";
import { map } from 'rxjs/operators';

import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API)
                    .pipe(map((data: Passenger[]) => data));
    }
}