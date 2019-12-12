import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeDetailComponent } from "./components/heroe-detail/heroe-detail.component";

import { SearchResultComponent } from "./components/search-result/search-result.component";

//examples components
import { ExampleOneComponent } from "./components/example-one/example-one.component";
import { ExampleTwoComponent } from "./components/example-two/example-two.component";

//eagle eye components
import { FormReportsComponent } from "./components/form-reports/form-reports.component";
import { StatusReportsComponent } from "./components/status-reports/status-reports.component";
import { MapViewComponent } from "./components/map-view/map-view.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe-detail/:id", component: HeroeDetailComponent },
  { path: "example-one", component: ExampleOneComponent },
  { path: "example-two", component: ExampleTwoComponent },
  {
    path: "search-result/:termino",
    component: SearchResultComponent,
    data: {}
  },
  //eagle eye routes
  { path: "status-reports", component: StatusReportsComponent },
  { path: "form-reports/:id", component: FormReportsComponent },
  { path: "map-view", component: MapViewComponent },

  { path: "**", pathMatch: "full", redirectTo: "home" }
];

//  to use http://localhost:4200/#/ into the url
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
