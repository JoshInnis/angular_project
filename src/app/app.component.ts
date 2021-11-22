import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name: string ="Josh";

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Innis";
  }
}