// angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

// routing
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}