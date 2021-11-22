import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  templateUrl: 'passenger-count.component.html'
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[] = [];

  checkedInCount() {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
  }
}