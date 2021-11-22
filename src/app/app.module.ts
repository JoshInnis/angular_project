// angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

// routing
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //angular modules
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}