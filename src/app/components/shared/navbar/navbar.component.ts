import { Component, OnInit } from "@angular/core";
//importing the heroes services
import { HeroesService } from "../../../services/heroes.service";
//import router
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    let searchResult = this._heroesService.buscarHeroes(termino);
    console.log("searchResult-->", searchResult);

    this.router.navigate(["/search-result", termino]);
  }
}
