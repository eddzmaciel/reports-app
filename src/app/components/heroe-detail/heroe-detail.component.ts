import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

//import service for use
import { HeroesService } from "../../services/heroes.service";

//receiving parameters from another component
@Component({
  selector: "app-heroe-detail",
  templateUrl: "./heroe-detail.component.html"
})
export class HeroeDetailComponent implements OnInit {
  heroe: any = {};
  casaMarvel: string = "assets/img/marvel.jpg";
  casaDc: string = "assets/img/dc.jpg";

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    /*
      un observador es como una promesa, es algo que esta pendiente de recibir 
      algunos cambios, yy para que functione nosotros 
      debemos suscribirnos a ese observador
    */

    this.activatedRoute.params.subscribe(params => {
      console.log(
        "here are the params: ",
        params,
        ' call specifically the params["id"]: ',
        params["id"]
      );

      //making reference to the heroe that we created before of the constructor
      this.heroe = this._heroesService.getHeroeDetail(params["id"]);
    });
  }

  ngOnInit() {
    console.log("heroe: ", this.heroe);
  }
}
