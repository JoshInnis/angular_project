import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string;
  logo: string = 'https://avatars.githubusercontent.com/u/7564930?v=4';
  name: string ="Josh"

  constructor() {
    this.title = 'Ultimate Angular'
  }

}