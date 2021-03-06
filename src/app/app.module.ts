import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//routes
import { APP_ROUTING } from "./app.routes";

//services
//first one we need to import the service into the app.module.ts file,
import { HeroesService } from "./services/heroes.service";

//example service
import { ExampleOneService } from "./services/example-one.service";
import { ExampleTwoService } from "./services/example-two.service";

import { AppComponent } from "./app.component";
//components created with the generator: ng g c ./components/name-component
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
//app components created manually
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeDetailComponent } from "./components/heroe-detail/heroe-detail.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";

//example components

import { ExampleOneComponent } from "./components/example-one/example-one.component";
import { ExampleTwoComponent } from "./components/example-two/example-two.component";
import { HeroeTarjetaComponent } from "./components/heroe-tarjeta/heroe-tarjeta.component";

//
import { ClientDocumentComponent } from "./components/client-document/client-document.component";

//style
import { AngularFontAwesomeModule } from "angular-font-awesome";

//------------------

// eagle eye components
import { ReportsComponent } from "./components/reports/reports.component";
import { MapViewComponent } from "./components/map-view/map-view.component";
import { FormReportsComponent } from "./components/form-reports/form-reports.component";

//eagle eye modules
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { StatusReportsComponent } from "./components/status-reports/status-reports.component";

import { ChartsModule } from "ng2-charts";
//------------------

@NgModule({
  //here goes all our components
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeDetailComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    SearchResultComponent,
    HeroeTarjetaComponent,
    //eagle eye Components
    ClientDocumentComponent,
    ReportsComponent,
    MapViewComponent,
    FormReportsComponent,
    StatusReportsComponent
  ],
  //here goes our app routing
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyARLbMJYAFNDIXqmzQbi9HDRPY7ECs6Hxo"
    }),
    ChartsModule
  ],
  //here goes all our services
  providers: [HeroesService, ExampleOneService, ExampleTwoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
