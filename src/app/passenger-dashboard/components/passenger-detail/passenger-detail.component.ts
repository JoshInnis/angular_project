import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent {
  @Input()
  detail?: Passenger;
  
  @Output()
  edit = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  editing: boolean = false;
  
  getChildren() {
    if (this.detail?.children) return this.detail?.children.length;
    return 0;
  }

  onNameChange(value: string) {
    if (this.detail)
      this.detail.fullname = value;
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}