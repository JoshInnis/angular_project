import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail?: Passenger;
  
  @Output()
  edit = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  editing: boolean = false;
  
  ngOnChanges(changes: any) {
    if(changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

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