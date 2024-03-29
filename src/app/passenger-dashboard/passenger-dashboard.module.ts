import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
// container
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

// components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

// service
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule ({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}