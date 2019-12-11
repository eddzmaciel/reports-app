import { Component, OnInit } from "@angular/core";
//to get params we have to import ActivatedRoute
import { ActivatedRoute } from "@angular/router";

// import service
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html"
})
export class SearchResultComponent implements OnInit {
  termino;
  heroes: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
    });
  }
}
