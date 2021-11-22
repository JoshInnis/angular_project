import { Component } from "@angular/core";

interface Child {
  name: string,
  age: number
}


interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number,
  children?: Child[]
}


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  uppercase(value: Passenger) {
    return value.fullname.toLocaleUpperCase();
  }

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
  }];

}