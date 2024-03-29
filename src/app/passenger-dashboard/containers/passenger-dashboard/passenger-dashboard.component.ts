import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    this.passengerService.getPassengers()
      .subscribe(res => {
        this.passengers = res;
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id
        });
      });
    }
}