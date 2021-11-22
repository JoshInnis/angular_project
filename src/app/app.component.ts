import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name: string ="Josh";


  handleChange(event: string) {
    this.name = event;
  }

  handleClick() {
    this.name = "Innis";
  }
}