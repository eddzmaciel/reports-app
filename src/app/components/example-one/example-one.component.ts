import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

//importing the service
import { ExampleOneService } from "../../services/example-one.service";

@Component({
  selector: "app-example-one",
  templateUrl: "./example-one.component.html"
})
export class ExampleOneComponent implements OnInit {
  constructor(
    private _exampleOneService: ExampleOneService,
    private router: Router
  ) {
    console.info("-->constructor of example-one.component.ts");
  }
  ngOnInit() {}
}
