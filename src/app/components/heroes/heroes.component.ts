import { Component, OnInit } from "@angular/core";
//making the import of the service
import { HeroesService, HeroeFormat } from "../../services/heroes.service";
// we import this for use the navigation like we use in react
import { Router } from "@angular/router";

@Component({ selector: "app-heroes", templateUrl: "./heroes.component.html" })
export class HeroesComponent implements OnInit {
  heroes: HeroeFormat[] = [];
  constructor(private _heroesService: HeroesService, private router: Router) {
    console.log("constructor...");
  }

  //uses when the page is already initialized
  ngOnInit() {
    this.heroes = this._heroesService.getHeores();
  }

  // we define the value and the datatype that we are receiving t
  verHeroe(idx: number) {
    console.log(idx);
    this.router.navigate(["/heroe-detail", idx]);
  }
}
