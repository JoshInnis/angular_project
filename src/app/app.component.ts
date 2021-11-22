import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name: string ="Josh";

  handleClick(value: string) {
    console.log(value)
    this.name = value;
  }
}